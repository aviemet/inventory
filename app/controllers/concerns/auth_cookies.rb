module AuthCookies
  extend ActiveSupport::Concern
  
  include ::ActionController::Cookies
  
  included do
    before_action :authenticate_tokens_from_cookies
  end

  # Auth token signed with app secret
  def authenticate_tokens_from_cookies
    @current_user = false

    if cookies.signed[:auth_token] && JsonWebToken::valid?(cookies.signed[:auth_token])
      @current_user = JsonWebToken::decode(cookies.signed[:auth_token])
    elsif cookies.signed[:refresh_token]
      user = get_user_from_refresh_token
      if user && JsonWebToken.valid?(cookies.signed[:refresh_token], salt: user.user_secret)
        auth_token, refresh_token = set_auth_cookies(user)
        @current_user = JsonWebToken::decode(auth_token)
      end
    end
  end

  def get_user_from_refresh_token
    refresh_token_decoded = JsonWebToken::decode(cookies.signed[:refresh_token])
    return false if !refresh_token_decoded

    type_name, obj_id = GraphQL::Schema::UniqueWithinType.decode(refresh_token_decoded["uid"])
    if type_name == "User" && !obj_id.empty?
      return User::TokenAuth.find_by_id(obj_id)
    else
      return false
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

    return [auth_token, refresh_token]
  end

end