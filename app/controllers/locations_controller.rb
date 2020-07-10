class LocationsController < ApplicationController
  include ContactableConcern

  before_action :set_location, only: [:show, :edit, :update, :destroy]

  # GET /locations/:id
  # GET /locations/:id.json
  def show
  end

  # GET /companies/:company_id/locations/new
  def new
    @company = Company.find(params[:company_id])
    @location = Location.new
    @locations = Location.all # Parent location options
  end

  # GET /locations/:id/edit
  def edit
    @locations = Location.where.not(id: params[:id]).all
  end

  # POST /companies/:company_id/locations
  # POST /companies/:company_id/locations.json
  def create
    @location = Location.new(location_params)
    @location.company = Company.find(params[:company_id])

    respond_to do |format|
      if @location.save
        format.html { redirect_to company_url(@location.company), notice: 'Location was successfully created.' }
        format.json { render :show, status: :created, location: @location }
      else
        format.html { render :new }
        format.json { render json: @location.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /locations/:id
  # PATCH/PUT /locations/:id.json
  def update
    respond_to do |format|
      if @location.update(location_params)
        format.html { redirect_to company_url(@location.company), notice: 'Location was successfully updated.' }
        format.json { render :show, status: :ok, location: @location }
      else
        format.html { render :edit }
        format.json { render json: @location.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /locations/:id
  # DELETE /locations/:id.json
  def destroy
    @location.destroy
    respond_to do |format|
      format.html { redirect_to company_url(@location.company), notice: 'Location was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_location
    @location = Location.find(params[:id])
  end

  # Only allow a list of trusted parameters through. contact_attributes from Concern
  def location_params
    params.require(:location).permit(:name, :parent_id)
  end
end
