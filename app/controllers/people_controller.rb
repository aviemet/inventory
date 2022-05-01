class PeopleController < ApplicationController
  include OwnableConcern
  include Searchable
  # load_and_authorize_resource

  before_action :set_view_data, only: [:index, :category]

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
    render inertia: "People/New"
  end

  # GET /people/1/edit
  def edit
    render inertia: "People/Edit"
  end

  # POST /people
  # POST /people.json
  def create
    respond_to do |format|
      if person.save
        format.html { redirect_to person, notice: 'Person was successfully created.' }
        format.json { render :show, status: :created, location: person }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: person.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /people/1
  # PATCH/PUT /people/1.json
  def update
    respond_to do |format|
      if person.update(person_params)
        format.html { redirect_to person, notice: 'Person was successfully updated.' }
        format.json { render :show, status: :ok, location: person }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: person.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /people/1
  # DELETE /people/1.json
  def destroy
    person.destroy
    respond_to do |format|
      format.html { redirect_to people_url, notice: 'Person was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def sortable_fields
    %w(name asset_tag serial cost cost_cents purchased_at requestable models.name vendors.name categories.name manufacturers.name departments.name).freeze
  end

  def set_view_data
    @hideable_fields = {Model: "models.name", "Asset Tag": "asset_tag", Serial: "serial", Cost: "cost", "Purchase Date": "purchased_at", Requestable: "requestable", Category: "categories.name", Manufacturer: "manufacturers.name", "Model Number": "models.model_number", Vendor: "vendors.name", Department: "departments.name"}
  end

  def person_params
    params.require(:person).permit(:first_name, :middle_name, :last_name, :job_title, :manager_id, owner_attributes: [:id, :company_id, :department_id])
  end
end
