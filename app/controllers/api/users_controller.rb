class Api::UsersController < Api::ApiController
  expose :user

  # PATCH/PUT /api/users/:id
  def update
    authorize user
    if user.update(user_params)
      render json: user.render, status: 201
    else
      render json: { errors: user.errors }, status: 303
    end
  end

  # PATCH/PUT /users/update_table_preferences/:id
  def update_table_preferences
    authorize user
    if user.update_column(
      :table_preferences,
      current_user.table_preferences.deep_merge(request.params[:user][:table_preferences]),
    )
      head :ok, content_type: "text/html"
    end
  end

  # PATCH/PUT /users/update_user_preferences/:id
  def update_user_preferences
    authorize user
    if user.update_column(
      :user_preferences,
      current_user.user_preferences.deep_merge(request.params[:user][:user_preferences]),
    )
      head :ok, content_type: "text/html"
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :active_company_id, :active, :user_preferences, person: [:first_name, :last_name], company: [:name])
  end

end
