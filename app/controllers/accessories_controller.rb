class AccessoriesController < ApplicationController
  before_action :set_accessory, only: [:show, :edit, :update, :destroy]

  # GET /accessories
  # GET /accessories.json
  def index
    @accessories = Accessory.all
  end

  # GET /accessories/1
  # GET /accessories/1.json
  def show
  end

  # GET /accessories/new
  def new
    @accessory = Accessory.new
  end

  # GET /accessories/1/edit
  def edit
  end

  # POST /accessories
  # POST /accessories.json
  def create
    @accessory = Accessory.new(accessory_params)

    respond_to do |format|
      if @accessory.save
        format.html { redirect_to @accessory, notice: 'Accessory was successfully created.' }
        format.json { render :show, status: :created, location: @accessory }
      else
        format.html { render :new }
        format.json { render json: @accessory.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /accessories/1
  # PATCH/PUT /accessories/1.json
  def update
    respond_to do |format|
      if @accessory.update(accessory_params)
        format.html { redirect_to @accessory, notice: 'Accessory was successfully updated.' }
        format.json { render :show, status: :ok, location: @accessory }
      else
        format.html { render :edit }
        format.json { render json: @accessory.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /accessories/1
  # DELETE /accessories/1.json
  def destroy
    @accessory.destroy
    respond_to do |format|
      format.html { redirect_to accessories_url, notice: 'Accessory was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_accessory
      @accessory = Accessory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def accessory_params
      params.require(:accessory).permit(:name, :serial, :notes, :qty, :vendor_id, :default_location_id, :accessory_category_id, :model_number, :cost, :min_qty)
    end
end