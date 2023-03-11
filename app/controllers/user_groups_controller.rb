class UserGroupsController < ApplicationController
  include OwnableConcern

  expose :user_groups, -> { @active_company.user_groups.includes_associated }
  expose :user_group

  # GET /user_group
  def index
    render inertia: "UserGroups/Index", props: {
      user_groups: -> { user_groups.render(view: :index) }
    }
  end

  # GET /user_group/:id
  def show
    render inertia: "UserGroups/Show", props: {
      user_group: -> { user_group.render(view: :show) }
    }
  end

  # GET /user_group/new
  def new
    render inertia: "UserGroups/New", props: {
      user_group: UserGroup.new.render(view: :new),
    }
  end

  # GET /user_group/:id/edit
  def edit
    render inertia: "UserGroups/Edit", props: {
      user_group: user_group.render(view: :edit),
    }
  end

  # POST /user_group
  def create
    if user_group.save
      redirect_to user_group, notice: 'UserGroup was successfully created'
    else
      redirect_to user_group_path, inertia: { errors: user_group.errors }
    end
  end

  # PATCH/PUT /user_group/:id
  def update
    if user_group.update(user_group_params)
      redirect_to user_group, notice: 'UserGroup was successfully updated'
    else
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
    params.require(:user_group).permit(:name, :description)
  end
end
