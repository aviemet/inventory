module AuthCookies
  extend ActiveSupport::Concern
  
  include ::ActionController::Cookies
  
  included do
    before_action :authenticate_tokens_from_cookies
  end

  # Auth token signed with app secret
  def authenticate_tokens_from_cookies
    puts "Checking tokens"
    @current_user = false

    if cookies.signed[:auth_token] && JsonWebToken::valid?(cookies.signed[:auth_token])
      puts "We have an auth token"
      auth_token = JsonWebToken::decode(cookies.signed[:auth_token])
      @current_user = auth_token[:uid]
    elsif cookies.signed[:refresh_token]
      puts "We have a refresh token"
      user = get_user_from_refresh_token
      if user && JsonWebToken.valid?(cookies.signed[:refresh_token], salt: user.user_secret)
        set_auth_cookies(user)
        @current_user = GraphQL::Schema::UniqueWithinType.encode(User.name, user.id)
      end
    end
  end

  def get_user_from_refresh_token
    refresh_token_decoded = JsonWebToken::decode(cookies.signed[:refresh_token])
    return false if !refresh_token_decoded

    type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(refresh_token_decoded["uid"])
    if type_name == "User" && !obj_id.empty?
      return User::TokenAuth.select(:user_secret).find_by_id(obj_id)
    else
      return false
    end
  end



	# Check auth and refresh tokens for validity
  # Auth token is short lived and weakly signed with gloabl app secret. Easy check for user id. 
  # If exists, set current_user to user id
  #
  # Refresh token is signed with app secret and user secret. Need to get the user secret from User record to validate.
  def authenticate_tokens_from_cookies2


    if auth_token_valid?
      auth_token = JsonWebToken::valid?(cookies.signed[:auth_token])
      @current_user = auth_token[:uid]
    else
      user = nil
      # Check the refresh token
      if cookies[:refresh_token]
        # Decode the token and get the model and record id
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
          # set_auth_cookies(user)
          # auth_token, refresh_token = user.issue_tokens
          
          # # Set the auth token cookie
          cookies.signed[:auth_token] = {
            value: auth_token,
            httponly: false,
            expires: Rails.application.config.auth_token_expiration.from_now
          }

          # # Set the refresh token cookie
          cookies.signed[:refresh_token] = {
            value: refresh_token,
            httponly: false,
            expires: Rails.application.config.refresh_token_expiration.from_now
          }

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
	
  def set_auth_cookies(user)
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
      httponly: true,
      expires: Rails.application.config.refresh_token_expiration.from_now
    }
  end

end