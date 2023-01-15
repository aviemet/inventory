class UsersController < ApplicationController
  include Searchable
  include ContactableConcern

  expose :users, -> { search(User.all.includes_associated, sortable_fields) }
  expose :user

  # GET /users
  def index
    paginated_users = users.page(params[:page] || 1)

    render inertia: "Users/Index", props: {
      users: users.render(view: :associations),
      pagination: -> { {
        count: users.count,
        **pagination_data(paginated_users)
      } }
    }
  end

  # GET /users/:id
  def show
    render inertia: "Users/Show", props: {
      user: user.render(view: :associations)
    }
  end

  # GET /users/new
  def new
    render inertia: "Users/New", props: {
      user: user.render
    }
  end

  # GET /users/:id/edit
  def edit
    render inertia: "Users/Edit", props: {
      user: user.render(view: :associations)
    }
  end

  # GET /users/complete_registration
  def complete_registration
    unless current_user.companies.empty?
      redirect_to root_path
      return
    end

    render inertia: "Public/Devise/Register/Complete"
  end

  # POST /users/complete_registration
  def save_complete_registration
    unless current_user.companies.empty?
      ap "REDIRECTING"
      redirect_to root_path
      return
    end

    params.permit!
    current_user.person ||= Person.new
    current_user.person.assign_attributes params[:person]

    current_user.transaction do
      company = Company::AsSetup.create!(params[:company])
      company = Company.find(company.id)

      current_user.add_role :admin, company
      current_user.active_company = company

      current_user.person.company = company
      current_user.person.save

      if current_user.save
        redirect_to root_path
      end

    end
  rescue ActiveRecord::RecordInvalid
    redirect_to complete_registration_path
  end

  # PATCH/PUT /users/:id
  def update
    if user.update(user_params)
      redirect_to user, notice: 'User was successfully updated.'
    else
      redirect_to edit_user_path(user), inertia: { errors: user.errors }
    end
  end

  # PATCH/PUT /users/update_table_preferences/:id
  def update_table_preferences
    if user.update_column(:table_preferences, current_user.table_preferences.deep_merge(request.params[:user][:table_preferences]))
      head :ok, content_type: "text/html"
    end
  end

  # PATCH/PUT /users/update_user_preferences/:id
  def update_user_preferences
    if user.update_column(:user_preferences, current_user.user_preferences.deep_merge(request.params[:user][:user_preferences]))
      head :ok, content_type: "text/html"
    end
  end

  # DELETE /users/:id
  def destroy
    user.destroy
    respond_to do
      redirect_to users_url, notice: 'User was successfully destroyed.'
    end
  end

  private

  def sortable_fields
    %w(email active person.name active_company.name).freeze
  end

  def user_params
    params.require(:user).permit(:email, :password, :active_company, :active, :user_preferences, person: [:first_name, :last_name], company: [:name])
  end
end
