class PeopleController < ApplicationController
  include OwnableConcern
  include Searchable
  include ContactableConcern

  expose :people, -> { search(@active_company.people.includes_associated, sortable_fields) }
  expose :person

  # GET /people
  def index
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
    render inertia: "People/New", props: {
      person: Person::AsCreate.new.render(view: :new),
      departments: InertiaRails.lazy(-> { @active_company.departments.render(view: :as_options) }),
      locations: InertiaRails.lazy(-> { @active_company.locations.render(view: :as_options) }),
      people: InertiaRails.lazy(-> { @active_company.people.render(view: :as_options) }),
    }
  end

  # GET /people/1/edit
  def edit
    render inertia: "People/Edit", props: {
      person: person.render(view: :edit),
      departments: -> { @active_company.departments.render(view: :as_options) },
      locations: -> { @active_company.locations.render(view: :as_options) },
      people: -> { @active_company.people.render(view: :as_options) },
    }
  end

  # POST /people
  def create
    ap({ person_params: })
    person = Person.new(handle_department_params)

    person.company = @active_company

    if person.save
      redirect_to person, notice: 'Person was successfully created'
    else
      redirect_to new_person_path, inertia: { errors: person.errors }
    end
  end

  # PATCH/PUT /people/1
  def update
    if person.update(handle_department_params)
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

  def handle_department_params
    adjusted_params = person_params.except(:department_id)

    if person_params[:department_id]
      department = @active_company.departments.find(person_params[:department_id])
      adjusted_params[:department] = department if department
    end

    adjusted_params
  end

  def sortable_fields
    %w(first_name last_name employee_number job_title guid manager.name location.name items.count accessories.count department.name).freeze
  end

  def person_params
    params.require(:person).permit(
      :id, :first_name, :middle_name, :last_name, :active, :employee_number, :department, :job_title, :manager_id, :department_id,
      user_attributes: [:email, :password, :check_password, :active_company_id, :table_preferences, :user_preferences, :active],
      contact_attributes: [
        emails_attributes: [:id, :email, :_destroy],
        phones_attributes: [:id, :number, :_destroy],
        addresses_attributes: [:id, :address, :_destroy],
        websites_attributes: [:id, :url, :_destroy],
      ]
    )
  end
end
