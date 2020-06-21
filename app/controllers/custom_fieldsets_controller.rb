class CustomFieldsetsController < ApplicationController
  before_action :set_custom_fieldset, only: [:show, :edit, :update, :destroy]

  # GET /custom_fieldsets
  # GET /custom_fieldsets.json
  def index
    @custom_fieldsets = CustomFieldset.all
  end

  # GET /custom_fieldsets/1
  # GET /custom_fieldsets/1.json
  def show
  end

  # GET /custom_fieldsets/new
  def new
    @custom_fieldset = CustomFieldset.new
  end

  # GET /custom_fieldsets/1/edit
  def edit
  end

  # POST /custom_fieldsets
  # POST /custom_fieldsets.json
  def create
    @custom_fieldset = CustomFieldset.new(custom_fieldset_params)

    respond_to do |format|
      if @custom_fieldset.save
        format.html { redirect_to @custom_fieldset, notice: 'Custom fieldset was successfully created.' }
        format.json { render :show, status: :created, location: @custom_fieldset }
      else
        format.html { render :new }
        format.json { render json: @custom_fieldset.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /custom_fieldsets/1
  # PATCH/PUT /custom_fieldsets/1.json
  def update
    respond_to do |format|
      if @custom_fieldset.update(custom_fieldset_params)
        format.html { redirect_to @custom_fieldset, notice: 'Custom fieldset was successfully updated.' }
        format.json { render :show, status: :ok, location: @custom_fieldset }
      else
        format.html { render :edit }
        format.json { render json: @custom_fieldset.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /custom_fieldsets/1
  # DELETE /custom_fieldsets/1.json
  def destroy
    @custom_fieldset.destroy
    respond_to do |format|
      format.html { redirect_to custom_fieldsets_url, notice: 'Custom fieldset was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_custom_fieldset
    @custom_fieldset = CustomFieldset.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def custom_fieldset_params
    params.require(:custom_fieldset).permit(:name, :description)
  end
end
