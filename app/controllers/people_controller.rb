class PeopleController < ApplicationController
  include OwnableConcern
  include Searchable
  include ContactableConcern

  expose :people, -> { search(@active_company.people.includes_associated, sortable_fields) }
  expose :person, scope: ->{ @active_company.people }, find: ->(id, scope){ scope.includes_associated.find(id) }

  # @route GET /people (people)
  def index
    authorize people
    paginated_people = people.page(params[:page] || 1).per(current_user.limit(:people))

    render inertia: "People/Index", props: {
      people: paginated_people.render(view: :index),
      pagination: -> { {
        count: people.count,
        **pagination_data(paginated_people)
      } }
    }
  end

  # @route GET /people/:id (person)
  def show
    authorize person
    render inertia: "People/Show", props: {
      person: person.render(view: :show)
    }
  end

  # @route GET /people/new (new_person)
  def new
    authorize Person
    render inertia: "People/New", props: {
      person: People::FormDataSerializer.render(Person::AsCreate.new),
    }
  end

  # @route GET /people/:id/edit (edit_person)
  def edit
    authorize person
    render inertia: "People/Edit", props: {
      person: person.render(view: :edit),
    }
  end

  # @route POST /people (people)
  def create
    authorize Person
    person = Person.new(handle_department_params)

    person.company = @active_company

    if person.save
      redirect_to person, notice: 'Person was successfully created'
    else
      redirect_to new_person_path, inertia: { errors: person.errors }
    end
  end

  # @route PATCH /people/:id (person)
  # @route PUT /people/:id (person)
  def update
    authorize person
    if person.update(handle_department_params)
      redirect_to person, notice: 'Person was successfully updated'
    else
      redirect_to edit_person_path, inertia: { errors: person.errors }
    end
  end

  # @route DELETE /people (people)
  # @route DELETE /people/:id (person)
  def destroy
    authorize person
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
      user_attributes: [:id, :email, :password, :check_password, :active_company_id, :table_preferences, :user_preferences, :active],
      contact_attributes: [
        emails_attributes: [:id, :email, :_destroy],
        phones_attributes: [:id, :number, :_destroy],
        addresses_attributes: [:id, :address, :_destroy],
        websites_attributes: [:id, :url, :_destroy],
      ],
    )
  end
end
