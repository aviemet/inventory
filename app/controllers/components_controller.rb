class ComponentsController < ApplicationController
  include OwnableConcern
  include Searchable

  before_action :set_component, only: %i[show edit update destroy]

  # GET /components(.json)
  def index
    @components = if params[:search]
                    search(Component, params[:search], params[:page])
                  else
                    searchable_object.order(sort(Component)).page(params[:page])
                  end
  end

  # GET /components/:id(.json)
  def show
  end

  # GET /components/new
  def new
    @component = Component.new
  end

  # GET /components/:id/edit
  def edit
  end

  # POST /components(.json)
  def create
    @component = Component.new(component_params)
    @component.company = Company.find(company_params[:id])

    respond_to do |format|
      if @component.save
        format.html { redirect_to @component, notice: "Component was successfully created." }
        format.json { render :show, status: :created, location: @component }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @component.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /components/:id(.json)
  def update
    respond_to do |format|
      if @component.update(component_params)
        format.html { redirect_to @component, notice: "Component was successfully updated." }
        format.json { render :show, status: :ok, location: @component }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @component.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /components/:id(.json)
  def destroy
    @component.destroy
    respond_to do |format|
      format.html { redirect_to components_url, notice: "Component was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  def searchable_object
    @active_company.components.includes_associated
  end

  def sortable_fields
    %w(name model_number min_qty qty cost manufacturers.name categories.name vendors.name).freeze
  end

  # Use callbacks to share common setup or constraints between actions.
  def set_component
    @component = Component.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def component_params
    params.require(:component).permit(:name, :model_number, :qty, :min_qty, :cost, :notes, :category_id, :manufacturer_id, :vendor_id, :default_location_id)
  end
end
