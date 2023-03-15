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
    self.person.owner = Ownership.new
    render inertia: "People/New", props: {
      person: Person.new(user: User.new).render(view: :new),
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
    ap({ params: })
    if person.save
      redirect_to person, notice: 'Person was successfully created'
    else
      ap({ errors: person.errors })
      redirect_to new_person_path, inertia: { errors: person.errors }
    end
  end

  # PATCH/PUT /people/1
  def update
    ap({ params: })
    if person_params[:department_id]
      person_params[:department] = @active_company.departments.find(person_params[:department_id])
    end
    return # Temp for testing

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
    params.require(:person).permit(
      :id, :first_name, :middle_name, :last_name, :active, :employee_number, :department, :job_title, :manager_id, :department_id,
      user_attributes: [:email, :password, :check_password, :active_company_id, :table_preferences, :user_preferences, :active],
      contact_attributes: [**contact_attributes]
    )
  end
end
