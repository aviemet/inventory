class GraphqlController < ActionController::API
  include ::ActionController::Cookies

  before_action :authenticate_tokens_from_cookies

  attr_accessor :current_user

  # Check auth and refresh tokens for validity
  # Auth token is short lived and weakly signed with gloabl app secret. Easy check for user id. If exists, set current_user to user id
  #
  # Refresh token is signed with app secret and user secret. Need to get the user secret from User record to validate.
  def authenticate_tokens_from_cookies
    if auth_token_valid?(cookies[:auth_token])
      auth_token = JsonWebToken::decode(cookies.signed[:auth_token])
      @current_user = auth_token[:uid]
    else
      user = nil
      # Check the refresh token
      if cookies[:refresh_token]
        # Unsecurely decode the token and get the model and record id
        refresh_token_decoded = JWT.decode(cookies.signed[:refresh_token], nil, false)[0]
        type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(refresh_token_decoded["uid"])

        # Check that we're dealing with a User and that there is indeed a record id
        if type_name == "User" && !obj_id.empty?
          # Find the user
          user = User::TokenAuth.select(:user_secret).find_by_id(obj_id)
        else
          @current_user = false
        end
      end

      # With a valid refresh token, proceed with authentication
      if user
        # Decode the token securely using the user's secret
        refresh_token = JsonWebToken::decode(cookies.signed[:refresh_token], salt: user.user_secret)

        # Refresh token is valid
        if refresh_token && refresh_token[:exp] > Time.now.to_i
          set_auth_cookies(user)
          # auth_token, refresh_token = user.issue_tokens
          
          # # Set the auth token cookie
          # cookies.signed[:auth_token] = {
          #   value: auth_token,
          #   httponly: false,
          #   expires: Rails.application.config.auth_token_expiration.from_now
          # }

          # # Set the refresh token cookie
          # cookies.signed[:refresh_token] = {
          #   value: refresh_token,
          #   httponly: false,
          #   expires: Rails.application.config.refresh_token_expiration.from_now
          # }

          @current_user = auth_token["uid"]
        else
          # Tokens invalid, delete cookies
          cookies.delete :auth_token
          cookies.delete :refresh_token

          @current_user = false
        end
      else
        # Tokens invalid, delete cookies
        cookies.delete :auth_token
        cookies.delete :refresh_token
      end
    end
  end

  def execute
    variables = ensure_hash(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]
    context = {
      # Query context goes here, for example:
      current_user: @current_user,
      cookies: cookies,
    }
    result = ApplicationSchema.execute(query, variables: variables, context: context, operation_name: operation_name)
    render json: result
  rescue => e
    raise e unless Rails.env.development?
    handle_error_in_development e
  end

  def set_auth_cookies(user)
    puts "User"
    puts user
    
    auth_token, refresh_token = user.issue_tokens
          
    # Set the auth token cookie
    cookies.signed[:auth_token] = {
      value: auth_token,
      httponly: false,
      expires: Rails.application.config.auth_token_expiration.from_now
    }

    # Set the refresh token cookie
    cookies.signed[:refresh_token] = {
      value: refresh_token,
      httponly: false,
      expires: Rails.application.config.refresh_token_expiration.from_now
    }
  end

  private

  # Handle form data, JSON body, or a blank value
  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      if ambiguous_param.present?
        ensure_hash(JSON.parse(ambiguous_param))
      else
        {}
      end
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end

  def handle_error_in_development(e)
    logger.error e.message
    logger.error e.backtrace.join("\n")

    render json: { error: { message: e.message, backtrace: e.backtrace }, data: {} }, status: 500
  end

  def auth_token_valid?(auth_token = nil)
    return false if auth_token.nil?

    auth_token_decoded = JsonWebToken::decode(cookies.signed[:auth_token])
    return !auth_token_decoded.empty? && auth_token_decoded[:exp] > Time.now.to_i
  end
end
