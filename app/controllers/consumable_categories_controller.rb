class ConsumableCategoriesController < ApplicationController
  before_action :set_consumable_category, only: [:show, :edit, :update, :destroy]

  # GET /consumable_categories
  # GET /consumable_categories.json
  def index
    @consumable_categories = ConsumableCategory.all
  end

  # GET /consumable_categories/1
  # GET /consumable_categories/1.json
  def show
  end

  # GET /consumable_categories/new
  def new
    @consumable_category = ConsumableCategory.new
  end

  # GET /consumable_categories/1/edit
  def edit
  end

  # POST /consumable_categories
  # POST /consumable_categories.json
  def create
    @consumable_category = ConsumableCategory.new(consumable_category_params)

    respond_to do |format|
      if @consumable_category.save
        format.html { redirect_to @consumable_category, notice: 'Consumable category was successfully created.' }
        format.json { render :show, status: :created, location: @consumable_category }
      else
        format.html { render :new }
        format.json { render json: @consumable_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /consumable_categories/1
  # PATCH/PUT /consumable_categories/1.json
  def update
    respond_to do |format|
      if @consumable_category.update(consumable_category_params)
        format.html { redirect_to @consumable_category, notice: 'Consumable category was successfully updated.' }
        format.json { render :show, status: :ok, location: @consumable_category }
      else
        format.html { render :edit }
        format.json { render json: @consumable_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /consumable_categories/1
  # DELETE /consumable_categories/1.json
  def destroy
    @consumable_category.destroy
    respond_to do |format|
      format.html { redirect_to consumable_categories_url, notice: 'Consumable category was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_consumable_category
      @consumable_category = ConsumableCategory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def consumable_category_params
      params.require(:consumable_category).permit(:name, :notes)
    end
end
