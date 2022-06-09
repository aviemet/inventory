class PeopleController < ApplicationController
  include OwnableConcern
  include Searchable
  # load_and_authorize_resource

  expose :people, -> { @active_company.people.includes_associated }
  expose :person
  expose :departments, -> { @active_company.departments }

  # GET /people
  # GET /people.json
  def index
    self.people = search(people, sortable_fields)
    paginated_people = people.page(params[:page] || 1)

    render inertia: "People/Index", props: {
      people: PersonBlueprint.render_as_json(paginated_people, view: :associations),
      pagination: -> { {
        count: people.count,
        **pagination_data(paginated_people)
      } }
    }
  end

  # GET /people/1
  # GET /people/1.json
  def show
    render inertia: "People/Show", props: {
      person: PersonBlueprint.render_as_json(person, view: :associations)
    }
  end

  # GET /people/new
  def new
    self.person.owner = Ownership.new
    render inertia: "People/New", props: {
      person: PersonBlueprint.render_as_json(Person.new, view: :new),
      departments: -> { @active_company.departments.as_json },
      people: -> { @active_company.people.as_json },
    }
  end

  # GET /people/1/edit
  def edit
    render inertia: "People/Edit", props: {
      person: PersonBlueprint.render_as_json(person),
      departments: -> { @active_company.departments.as_json },
      people: -> { @active_company.people.as_json },
    }
  end

  # POST /people
  # POST /people.json
  def create
    person.company = @active_company
    if person.save
      redirect_to person, notice: 'License was successfully created'
    else
      redirect_to new_license_path, inertia: { errors: person.errors }
    end
  end

  # PATCH/PUT /people/1
  # PATCH/PUT /people/1.json
  def update
    if person.update(person_params)
      redirect_to person, notice: 'License was successfully updated'
    else
      redirect_to edit_person_path, inertia: { errors: person.errors }
    end
  end

  # DELETE /people/1
  # DELETE /people/1.json
  def destroy
    person.destroy
    redirect_to people_url, notice: 'Person was successfully destroyed.'
  end

  private

  def sortable_fields
    %w(name asset_tag serial cost cost_cents purchased_at requestable models.name vendors.name categories.name manufacturers.name departments.name).freeze
  end

  def person_params
    params.require(:person).permit(:first_name, :middle_name, :last_name, :job_title, :manager_id, owner_attributes: [:id, :company_id, :department_id])
  end
end
