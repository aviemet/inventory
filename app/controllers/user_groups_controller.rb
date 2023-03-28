class UserGroupsController < ApplicationController
  include OwnableConcern

  expose :user_groups, -> { @active_company.user_groups.includes_associated }
  expose :user_group, -> { @active_company.user_groups.includes_associated.find_by_slug(request.params[:slug]) }

  # GET /user_group
  def index
    paginated_user_groups = user_groups.page(params[:page] || 1)

    render inertia: "UserGroups/Index", props: {
      user_groups: -> { paginated_user_groups.render(view: :index) },
      pagination: -> { {
        count: user_groups.size,
        **pagination_data(paginated_user_groups)
      } }
    }
  end

  # GET /user_group/:id
  def show
    render inertia: "UserGroups/Show", props: {
      user_group: -> { user_group.render(view: :show) },
      users: InertiaRails.lazy(-> {
        paginated_users = user_group.users.includes_associated.page(params[:page] || 1)
        {
          data: paginated_users.render(view: :associations),
          pagination: {
            count: user_group.users.size,
            **pagination_data(paginated_users)
          }
        }
      }),
    }
  end

  # GET /user_group/new
  def new
    render inertia: "UserGroups/New"
  end

  # GET /user_group/:id/edit
  def edit
    render inertia: "UserGroups/Edit", props: {
      user_group: user_group.render(view: :edit),
    }
  end

  # POST /user_group
  def create
    user_group = UserGroup.new(user_group_params.except(:permissions))
    user_group.company = @active_company

    user_group.transaction do
      user_group.set_permissions(user_group_params[:permissions])
      if user_group.save?
        redirect_to user_group, notice: 'UserGroup was successfully created'
      else
        redirect_to user_group_path, inertia: { errors: user_group.errors }
      end
    rescue StandardError
      redirect_to user_group_path, inertia: { errors: user_group.errors }
    end

    # if user_group.persisted?
    #   redirect_to user_group, notice: 'UserGroup was successfully created'
    # else
    #   redirect_to user_group_path, inertia: { errors: user_group.errors }
    # end
  end

  # PATCH/PUT /user_group/:id
  def update
    user_group.transaction do
      user_group.set_permissions(user_group_params[:permissions])

      if user_group.update(user_group_params.except(:permissions))
        redirect_to user_group, notice: 'UserGroup was successfully updated'
      else
        redirect_to user_group_path, inertia: { errors: user_group.errors }
      end
    rescue StandardError
      redirect_to user_group_path, inertia: { errors: user_group.errors }
    end
  end

  # DELETE /user_group/:id
  def destroy
    user_group.destroy
    redirect_to user_groups_url, notice: 'UserGroup was successfully destroyed.'
  end

  private

  def user_group_params
    params.require(:user_group).permit(
      :name, :description, permissions: [
        item:         [:index, :show, :create, :update, :delete, :checkout, :checkin],
        accessory:    [:index, :show, :create, :update, :delete, :checkout, :checkin],
        component:    [:index, :show, :create, :update, :delete, :checkout, :checkin],
        consumable:   [:index, :show, :create, :update, :delete, :checkout],
        license:      [:index, :show, :create, :update, :delete, :checkout, :checkin],
        network:      [:index, :show, :create, :update, :delete],
        vendor:       [:index, :show, :create, :update, :delete],
        contract:     [:index, :show, :create, :update, :delete],
        category:     [:index, :show, :create, :update, :delete],
        model:        [:index, :show, :create, :update, :delete],
        manufacturer: [:index, :show, :create, :update, :delete],
        department:   [:index, :show, :create, :update, :delete],
        location:     [:index, :show, :create, :update, :delete],
        person:       [:index, :show, :create, :update, :delete],
        user:         [:index, :show, :create, :update, :delete],
      ]
    )
  end
end
