class LocationsController < ApplicationController
  include ContactableConcern

  before_action :set_location, only: [:show, :edit, :update, :destroy]

  # GET /locations
  # GET /locations.json
  def index
    @locations = current_user.active_company.locations
    render inertia: "Locations/Index"
  end

  # GET /locations/:id
  # GET /locations/:id.json
  def show
    render inertia: "Locations/Show"
  end

  # GET /locations/new
  def new
    @location = Location.new
    render inertia: "Locations/New"
  end

  # GET /locations/:id/edit
  def edit
    @locations = Location.where.not(id: params[:id]).all
    render inertia: "Locations/Edit"
  end

  # POST /locations
  # POST /locations.json
  def create
    @location = Location.new(location_params)
    @location.company = @active_company

    respond_to do |format|
      if @location.save
        format.html { redirect_to company_url(@location.company), notice: 'Location was successfully created.' }
        format.json { render :show, status: :created, location: @location }
      else
        format.html { render :new, status: :unprocessable_entity }
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
        format.html { render :edit, status: :unprocessable_entity }
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

  def set_location
    @location = Location.find_by_slug(params[:id])
  end

  # contact_attributes from Concern
  def location_params
    params.require(:location).permit(:name, :parent_id)
  end
end
