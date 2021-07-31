class PeopleController < ApplicationController
  include OwnableConcern
  include Sortable
  include Searchable
  # load_and_authorize_resource

  before_action :set_view_data, only: [:index, :category]
  before_action :set_person, only: [:show, :edit, :update, :destroy]
  before_action :set_form_models, only: [:edit, :new]

  # GET /people
  # GET /people.json
  def index
    @people = if params[:search]
               search(Person, params[:search], params[:page])
             else
               searchable_object.order(sort(Person)).page(params[:page])
             end
  end

  # GET /people/1
  # GET /people/1.json
  def show
  end

  # GET /people/new
  def new
    @person = Person.new
    @person.owner = Ownership.new
  end

  # GET /people/1/edit
  def edit
  end

  # POST /people
  # POST /people.json
  def create
    @person = Person.new(person_params)

    respond_to do |format|
      if @person.save
        format.html { redirect_to @person, notice: 'Person was successfully created.' }
        format.json { render :show, status: :created, location: @person }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @person.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /people/1
  # PATCH/PUT /people/1.json
  def update
    respond_to do |format|
      if @person.update(person_params)
        format.html { redirect_to @person, notice: 'Person was successfully updated.' }
        format.json { render :show, status: :ok, location: @person }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @person.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /people/1
  # DELETE /people/1.json
  def destroy
    @person.destroy
    respond_to do |format|
      format.html { redirect_to people_url, notice: 'Person was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def searchable_object
    @active_company.people.includes_associated
  end

  def sortable_fields
    %w(name asset_tag serial cost cost_cents purchased_at requestable models.name vendors.name categories.name manufacturers.name departments.name).freeze
  end

  def set_view_data
    @hideable_fields = {Model: "models.name", "Asset Tag": "asset_tag", Serial: "serial", Cost: "cost", "Purchase Date": "purchased_at", Requestable: "requestable", Category: "categories.name", Manufacturer: "manufacturers.name", "Model Number": "models.model_number", Vendor: "vendors.name", Department: "departments.name"}
  end

  def set_person
    @person = searchable_object.find(params[:id])
    @person.build_owner if !@person.owner # TODO: Why is this here?
  end

  def set_form_models
    @people = searchable_object.where.not(id: current_user)
    @departments = @active_company.departments
  end

  def person_params
    params.require(:person).permit(:first_name, :middle_name, :last_name, :job_title, :manager_id, owner_attributes: [:id, :company_id, :department_id])
  end
end
