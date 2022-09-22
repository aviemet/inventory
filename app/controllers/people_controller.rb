class PeopleController < ApplicationController
  include OwnableConcern
  include Searchable
  # load_and_authorize_resource

  expose :people, -> { @active_company.people.includes_associated }
  expose :person
  expose :departments, -> { @active_company.departments }

  # GET /people
  def index
    self.people = search(people, sortable_fields)
    paginated_people = people.page(params[:page] || 1)

    render inertia: "People/Index", props: {
      people: paginated_people.render(view: :associations),
      pagination: -> { {
        count: people.count,
        **pagination_data(paginated_people)
      } }
    }
  end

  # GET /people/1
  def show
    render inertia: "People/Show", props: {
      person: person.render(view: :associations)
    }
  end

  # GET /people/new
  def new
    self.person.owner = Ownership.new
    render inertia: "People/New", props: {
      person: Person.new.render(view: :new),
      departments: -> { @active_company.departments.render(view: :as_options) },
      people: -> { @active_company.people.render(view: :as_options) },
    }
  end

  # GET /people/1/edit
  def edit
    render inertia: "People/Edit", props: {
      person: person.render(view: :edit),
      departments: -> { @active_company.departments.render(view: :as_options) },
      people: -> { @active_company.people.render(view: :as_options) },
    }
  end

  # POST /people
  def create
    person.company = @active_company
    if person.save
      redirect_to person, notice: 'Person was successfully created'
    else
      redirect_to new_license_path, inertia: { errors: person.errors }
    end
  end

  # PATCH/PUT /people/1
  def update
    if person_params[:department_id]
      person_params[:department] = @active_company.departments.find(person_params[:department_id])
    end

    ap({ person_params: person_params })

    if person.update(person_params.except(:department_id).merge({
      department: @active_company.departments.find(person_params[:department_id]) || nil
    }))
      redirect_to person, notice: 'Person was successfully updated'
    else
      redirect_to edit_person_path, inertia: { errors: person.errors }
    end
  end

  # DELETE /people/1
  def destroy
    person.destroy
    redirect_to people_url, notice: 'Person was successfully destroyed.'
  end

  private

  def sortable_fields
    %w(first_name last_name employee_number job_title guid manager.name location.name items.count accessories.count department.name).freeze
  end

  def person_params
    params.require(:person).permit(:id, :first_name, :middle_name, :last_name, :active, :employee_number, :department, :job_title, :manager_id, :department_id)
  end
end
