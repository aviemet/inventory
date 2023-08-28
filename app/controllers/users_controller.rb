class UsersController < ApplicationController
  include Searchable
  include ContactableConcern

  expose :users, -> { search(User.all.includes_associated, sortable_fields) }
  expose :user

  # GET /users
  def index
    authorize users
    paginated_users = users.page(params[:page] || 1).per(current_user.limit(:users))

    render inertia: "Users/Index", props: {
      users: users.render(view: :index),
      pagination: -> { {
        count: users.count,
        **pagination_data(paginated_users)
      } }
    }
  end

  # GET /users/:id
  def show
    authorize user
    render inertia: "Users/Show", props: {
      user: user.render(view: :show)
    }
  end

  # GET /users/new
  def new
    authorize User
    render inertia: "Users/New", props: {
      user: user.render
    }
  end

  # GET /users/:id/edit
  def edit
    authorize user
    render inertia: "Users/Edit", props: {
      user: user.render(view: :edit)
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
      redirect_to root_path
      return
    end

    params.permit!

    person = Person.new(params[:person])
    person.user = current_user

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
    authorize user
    if user.update(user_params)
      redirect_to user, notice: 'User was successfully updated.'
    else
      redirect_to edit_user_path(user), inertia: { errors: user.errors }
    end
  end

  # DELETE /users/:id
  def destroy
    authorize user
    user.destroy
    redirect_to users_url, notice: 'User was successfully destroyed.'
  end

  private

  def sortable_fields
    %w(email active person.name active_company.name).freeze
  end

  def user_params
    params.require(:user).permit(:email, :password, :active_company, :active, :user_preferences, person: [:first_name, :last_name], company: [:name])
  end
end
