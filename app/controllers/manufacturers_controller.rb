class ManufacturersController < ApplicationController
  include OwnableConcern

  before_action :set_manufacturer, only: [:show, :edit, :update, :destroy]

  # GET /manufacturers
  # GET /manufacturers.json
  def index
    @manufacturers = Manufacturer.all
  end

  # GET /manufacturers/1
  # GET /manufacturers/1.json
  def show
  end

  # GET /manufacturers/new
  def new
    @manufacturer = Manufacturer.new
  end

  # GET /manufacturers/1/edit
  def edit
  end

  # POST /manufacturers
  # POST /manufacturers.json
  def create
    @manufacturer = Manufacturer.new(manufacturer_params)
    @manufacturer.company = Company.find(company_params[:id])
    respond_to do |format|
      if @manufacturer.save
        format.html { redirect_to @manufacturer, notice: 'Manufacturer was successfully created.' }
        format.json { render :show, status: :created, location: @manufacturer }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @manufacturer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /manufacturers/1
  # PATCH/PUT /manufacturers/1.json
  def update
    respond_to do |format|
      if @manufacturer.update(manufacturer_params)
        format.html { redirect_to @manufacturer, notice: 'Manufacturer was successfully updated.' }
        format.json { render :show, status: :ok, location: @manufacturer }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @manufacturer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /manufacturers/1
  # DELETE /manufacturers/1.json
  def destroy
    @manufacturer.destroy
    respond_to do |format|
      format.html { redirect_to manufacturers_url, notice: 'Manufacturer was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_manufacturer
    @manufacturer = Manufacturer.find(params[:id])
  end

  def manufacturer_params
    params.require(:manufacturer).permit(:name)
  end
end
