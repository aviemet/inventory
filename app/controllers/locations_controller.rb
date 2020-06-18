class LocationsController < ApplicationController
  before_action :set_location, only: [:show, :edit, :update, :destroy]
  before_action :set_company_id, only: [:index, :show]

  # GET /companies/:company_id/locations
  # GET /companies/:company_id/locations.json
  def index
    @locations = Location.all
  end

  # GET /companies/:company_id/locations/:id
  # GET /companies/:company_id/locations/:id.json
  def show
  end

  # GET /companies/:company_id/locations/new
  def new
    @company = Company.find(params[:company_id])
    @location = Location.new
    @locations = Location.all # Parent location options
  end

  # GET /companies/:company_id/locations/:id/edit
  def edit
    logger.debug params
    @locations = Location.where.not(id: params[:id]).all
    @company = Company.find(params[:company_id])
  end

  def create
    @location = Location.new(location_params)
    @location.company = Company.find(params[:company_id])

    respond_to do |format|
      if @location.save
        format.html { redirect_to company_url(params[:company_id]), notice: 'Location was successfully created.' }
        format.json { render :show, status: :created, location: @location }
      else
        format.html { render :new }
        format.json { render json: @location.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /companies/:company_id/locations/:id
  # PATCH/PUT /companies/:company_id/locations/:id.json
  def update
    respond_to do |format|
      if @location.update(location_params)
        format.html { redirect_to company_url(params[:company_id], @location), notice: 'Location was successfully updated.' }
        format.json { render :show, status: :ok, location: @location }
      else
        format.html { render :edit }
        format.json { render json: @location.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /companies/:company_id/locations/:id
  # DELETE /companies/:company_id/locations/:id.json
  def destroy
    @location.destroy
    respond_to do |format|
      format.html { redirect_to company_url(params[:company_id]), notice: 'Location was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_location
    @location = Location.find(params[:id])
    @location
  end

  def set_company_id
    @company_id = params[:company_id]
  end

  # Only allow a list of trusted parameters through.
  def location_params
    params.require(:location).permit(:name, :parent_id)
  end
end
