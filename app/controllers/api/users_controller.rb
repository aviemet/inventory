module Api
  class Api::UsersController < ApiController
    expose :user

    # PATCH/PUT /api/users/:id
    def update
      if user.update(user_params)
        render json: user.render, status: 201
      else
        render json: { errors: user.errors }, status: 303
      end
    end

    def user_params
      params.require(:user).permit(:email, :password, :active_company_id, :active, :user_preferences, person: [:first_name, :last_name], company: [:name])
    end

  end
end
