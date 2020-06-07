class CustomFieldsController < ApplicationController
  before_action :set_custom_field, only: [:show, :edit, :update, :destroy]

  # GET /custom_fields
  # GET /custom_fields.json
  def index
    @custom_fields = CustomField.all
  end

  # GET /custom_fields/1
  # GET /custom_fields/1.json
  def show
  end

  # GET /custom_fields/new
  def new
    @custom_field = CustomField.new
  end

  # GET /custom_fields/1/edit
  def edit
  end

  # POST /custom_fields
  # POST /custom_fields.json
  def create
    @custom_field = CustomField.new(custom_field_params)

    respond_to do |format|
      if @custom_field.save
        format.html { redirect_to @custom_field, notice: 'Custom field was successfully created.' }
        format.json { render :show, status: :created, location: @custom_field }
      else
        format.html { render :new }
        format.json { render json: @custom_field.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /custom_fields/1
  # PATCH/PUT /custom_fields/1.json
  def update
    respond_to do |format|
      if @custom_field.update(custom_field_params)
        format.html { redirect_to @custom_field, notice: 'Custom field was successfully updated.' }
        format.json { render :show, status: :ok, location: @custom_field }
      else
        format.html { render :edit }
        format.json { render json: @custom_field.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /custom_fields/1
  # DELETE /custom_fields/1.json
  def destroy
    @custom_field.destroy
    respond_to do |format|
      format.html { redirect_to custom_fields_url, notice: 'Custom field was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_custom_field
      @custom_field = CustomField.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def custom_field_params
      params.require(:custom_field).permit(:name, :format, :element, :descriptions)
    end
end
