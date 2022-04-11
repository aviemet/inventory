class ManufacturersController < ApplicationController
  include OwnableConcern
  include Searchable

  before_action :set_view_data, only: [:index]

  expose :manufacturers, -> { @active_company.manufacturers }
  expose :manufacturer, find_by: :slug

  # GET /manufacturers
  # GET /manufacturers.json
  def index
    self.manufacturers = search(manufacturers, sortable_fields)
    render inertia: "Manufacturers/Index"
  end

  # GET /manufacturers/1
  # GET /manufacturers/1.json
  def show
    render inertia: "Manufacturers/Show"
  end

  # GET /manufacturers/new
  def new
    render inertia: "Manufacturers/New"
  end

  # GET /manufacturers/1/edit
  def edit
    render inertia: "Manufacturers/Edit"
  end

  # POST /manufacturers
  # POST /manufacturers.json
  def create
    self.manufacturer.company = Company.find(company_params[:id])
    respond_to do |format|
      if manufacturer.save
        format.html { redirect_to manufacturer, notice: 'Manufacturer was successfully created.' }
        format.json { render :show, status: :created, location: manufacturer }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: manufacturer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /manufacturers/1
  # PATCH/PUT /manufacturers/1.json
  def update
    respond_to do |format|
      if manufacturer.update(manufacturer_params)
        format.html { redirect_to manufacturer, notice: 'Manufacturer was successfully updated.' }
        format.json { render :show, status: :ok, location: manufacturer }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: manufacturer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /manufacturers/1
  # DELETE /manufacturers/1.json
  def destroy
    manufacturer.destroy
    respond_to do |format|
      format.html { redirect_to manufacturers_url, notice: 'Manufacturer was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def sortable_fields
    %w(name).freeze
  end

  def set_view_data
    @hideable_fields = {}
  end

  def manufacturer_params
    params.require(:manufacturer).permit(:name)
  end
end
