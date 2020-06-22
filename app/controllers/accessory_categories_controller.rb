class AccessoryCategoriesController < ApplicationController
  before_action :set_accessory_category, only: [:show, :edit, :update, :destroy]

  # GET /accessory_categories
  # GET /accessory_categories.json
  def index
    @accessory_categories = AccessoryCategory.all
  end

  # GET /accessory_categories/1
  # GET /accessory_categories/1.json
  def show
  end

  # GET /accessory_categories/new
  def new
    @accessory_category = AccessoryCategory.new
  end

  # GET /accessory_categories/1/edit
  def edit
  end

  # POST /accessory_categories
  # POST /accessory_categories.json
  def create
    @accessory_category = AccessoryCategory.new(accessory_category_params)

    respond_to do |format|
      if @accessory_category.save
        format.html { redirect_to @accessory_category, notice: 'Accessory category was successfully created.' }
        format.json { render :show, status: :created, location: @accessory_category }
      else
        format.html { render :new }
        format.json { render json: @accessory_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /accessory_categories/1
  # PATCH/PUT /accessory_categories/1.json
  def update
    respond_to do |format|
      if @accessory_category.update(accessory_category_params)
        format.html { redirect_to @accessory_category, notice: 'Accessory category was successfully updated.' }
        format.json { render :show, status: :ok, location: @accessory_category }
      else
        format.html { render :edit }
        format.json { render json: @accessory_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /accessory_categories/1
  # DELETE /accessory_categories/1.json
  def destroy
    @accessory_category.destroy
    respond_to do |format|
      format.html { redirect_to accessory_categories_url, notice: 'Accessory category was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_accessory_category
      @accessory_category = AccessoryCategory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def accessory_category_params
      params.require(:accessory_category).permit(:name, :notes)
    end
end
