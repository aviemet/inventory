module Test
  class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    skip_before_action :authenticate_user!, only: [:create]

    # @route POST /test/login (test_login)
    def create
      user = User.find_by(email: params[:email])

      if user&.valid_password?(params[:password])
        sign_in_without_callbacks(user)
        render json: { success: true }
      else
        render json: { success: false }, status: :unauthorized
      end
    end

    private

    # Method to sign in the user without triggering Warden callbacks
    def sign_in_without_callbacks(user)
      request.env["warden"].session_serializer.store(user, :user)
    end

  end
end
