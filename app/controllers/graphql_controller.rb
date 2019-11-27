class GraphqlController < ActionController::API
  include ::ActionController::Cookies

  before_action :authenticate_tokens_from_cookies

  attr_accessor :current_user

  def authenticate_tokens_from_cookies
    if cookies[:auth_token] && cookies[:refresh_token]
      auth_token = JsonWebToken::decode(cookies.signed[:auth_token])

      if auth_token[:exp] > Time.now.to_i
        # User auth token is valid
        @current_user = auth_token[:uid]
      else
        # Auth token invalid, check the refresh token
        type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(auth_token[:uid])
        user = User::TokenAuth.select(:user_secret).find_by_id(obj_id)
        refresh_token = JsonWebToken::decode(cookies.signed[:refresh_token], salt: user.user_secret)

        if refresh_token && refresh_token[:exp] > Time.now.to_i
          auth_token, refresh_token = user.issue_tokens

          # Set the auth token cookie
          cookies.signed[:auth_token] = {
            value: auth_token,
            httponly: true,
            expires: Rails.application.config.auth_token_expiration.from_now
          }

          # Set the refresh token cookie
          cookies.signed[:refresh_token] = {
            value: refresh_token,
            httpOnly: true,
            expires: Rails.application.config.refresh_token_expiration.from_now
          }
        else
          # Tokens invalid, delete cookies
          cookies.delete :auth_token
          cookies.delete :refresh_token
        end

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
end
