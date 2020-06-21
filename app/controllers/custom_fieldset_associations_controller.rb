class CustomFieldsetAssociationsController < ApplicationController
  before_action :set_custom_fieldset_association, only: [:show, :edit, :update, :destroy]

  # GET /custom_fieldset_associations
  # GET /custom_fieldset_associations.json
  def index
    @custom_fieldset_associations = CustomFieldsetAssociation.all
  end

  # GET /custom_fieldset_associations/1
  # GET /custom_fieldset_associations/1.json
  def show
  end

  # GET /custom_fieldset_associations/new
  def new
    @custom_fieldset_association = CustomFieldsetAssociation.new
  end

  # GET /custom_fieldset_associations/1/edit
  def edit
  end

  # POST /custom_fieldset_associations
  # POST /custom_fieldset_associations.json
  def create
    @custom_fieldset_association = CustomFieldsetAssociation.new(custom_fieldset_association_params)

    respond_to do |format|
      if @custom_fieldset_association.save
        format.html { redirect_to @custom_fieldset_association, notice: 'Custom fieldset association was successfully created.' }
        format.json { render :show, status: :created, location: @custom_fieldset_association }
      else
        format.html { render :new }
        format.json { render json: @custom_fieldset_association.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /custom_fieldset_associations/1
  # PATCH/PUT /custom_fieldset_associations/1.json
  def update
    respond_to do |format|
      if @custom_fieldset_association.update(custom_fieldset_association_params)
        format.html { redirect_to @custom_fieldset_association, notice: 'Custom fieldset association was successfully updated.' }
        format.json { render :show, status: :ok, location: @custom_fieldset_association }
      else
        format.html { render :edit }
        format.json { render json: @custom_fieldset_association.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /custom_fieldset_associations/1
  # DELETE /custom_fieldset_associations/1.json
  def destroy
    @custom_fieldset_association.destroy
    respond_to do |format|
      format.html { redirect_to custom_fieldset_associations_url, notice: 'Custom fieldset association was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_custom_fieldset_association
    @custom_fieldset_association = CustomFieldsetAssociation.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def custom_fieldset_association_params
    params.require(:custom_fieldset_association).permit(:custom_fieldset_id, :fieldable_id, :fieldable_type)
  end
end
