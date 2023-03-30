class PersonGroupsController < ApplicationController
  include OwnableConcern

  expose :person_groups, -> { @active_company.person_groups.includes_associated }
  expose :person_group, -> { @active_company.person_groups.includes_associated.find_by_slug(request.params[:slug]) }

  # GET /person_group
  def index
    paginated_person_groups = person_groups.page(params[:page] || 1)

    render inertia: "PersonGroups/Index", props: {
      person_groups: -> { paginated_person_groups.render(view: :index) },
      pagination: -> { {
        count: person_groups.size,
        **pagination_data(paginated_person_groups)
      } }
    }
  end

  # GET /person_group/:id
  def show
    render inertia: "PersonGroups/Show", props: {
      person_group: -> { person_group.render(view: :show) },
      people: InertiaRails.lazy(-> {
        paginated_people = person_group.people.includes_associated.page(params[:page] || 1)
        {
          data: paginated_people.render(view: :associations),
          pagination: {
            count: person_group.people.size,
            **pagination_data(paginated_people)
          }
        }
      }),
    }
  end

  # GET /person_group/new
  def new
    render inertia: "PersonGroups/New"
  end

  # GET /person_group/:id/edit
  def edit
    render inertia: "PersonGroups/Edit", props: {
      person_group: person_group.render(view: :edit),
    }
  end

  # POST /person_group
  def create
    person_group = PersonGroup.new(person_group_params.except(:permissions))
    person_group.company = @active_company
    person_group.save

    if person_group.persisted?
      person_group.set_permissions(person_group_params[:permissions])

      redirect_to person_group, notice: 'Group was successfully created'
    else
      redirect_to person_group_path, inertia: { errors: person_group.errors }
    end
  end

  # PATCH/PUT /person_group/:id
  def update
    if person_group.update(person_group_params.except(:permissions))
      person_group.set_permissions(person_group_params[:permissions])

      redirect_to person_group, notice: 'Group was successfully updated'
    else
      redirect_to person_group_path, inertia: { errors: person_group.errors }
    end
  end

  # DELETE /person_group/:id
  def destroy
    person_group.destroy
    redirect_to person_groups_url, notice: 'Group was successfully destroyed.'
  end

  private

  def person_group_params
    params.require(:person_group).permit(
      :name, :description, permissions: [
        company:      [:admin],
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
