class FieldsetAssociationsController < ApplicationController
  before_action :set_fieldset_association, only: [:show, :edit, :update, :destroy]

  # GET /fieldset_associations
  # GET /fieldset_associations.json
  def index
    @fieldset_associations = FieldsetAssociation.all
  end

  # GET /fieldset_associations/1
  # GET /fieldset_associations/1.json
  def show
  end

  # GET /fieldset_associations/new
  def new
    @fieldset_association = FieldsetAssociation.new
  end

  # GET /fieldset_associations/1/edit
  def edit
  end

  # POST /fieldset_associations
  # POST /fieldset_associations.json
  def create
    @fieldset_association = FieldsetAssociation.new(fieldset_association_params)

    respond_to do |format|
      if @fieldset_association.save
        format.html { redirect_to @fieldset_association, notice: 'Fieldset association was successfully created.' }
        format.json { render :show, status: :created, location: @fieldset_association }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @fieldset_association.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /fieldset_associations/1
  # PATCH/PUT /fieldset_associations/1.json
  def update
    respond_to do |format|
      if @fieldset_association.update(fieldset_association_params)
        format.html { redirect_to @fieldset_association, notice: 'Fieldset association was successfully updated.' }
        format.json { render :show, status: :ok, location: @fieldset_association }
      else
        format.html { render :edit }
        format.json { render json: @fieldset_association.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /fieldset_associations/1
  # DELETE /fieldset_associations/1.json
  def destroy
    @fieldset_association.destroy
    respond_to do |format|
      format.html { redirect_to fieldset_associations_url, notice: 'Fieldset association was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_fieldset_association
    @fieldset_association = FieldsetAssociation.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def fieldset_association_params
    params.require(:fieldset_association).permit(:fieldset_id, :fieldable_id, :fieldable_type)
  end
end
