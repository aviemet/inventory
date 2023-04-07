class FieldsetsController < ApplicationController
  before_action :set_fieldset, only: [:show, :edit, :update, :destroy]

  # GET /fieldsets
  def index
    @fieldsets = Fieldset.all
  end

  # GET /fieldsets/:id
  def show
  end

  # GET /fieldsets/new
  def new
    @fieldset = Fieldset.new
  end

  # GET /fieldsets/:id/edit
  def edit
  end

  # POST /fieldsets
  def create
    @fieldset = Fieldset.new(fieldset_params)

    respond_to do |format|
      if @fieldset.save
        format.html { redirect_to @fieldset, notice: 'Fieldset was successfully created.' }
        format.json { render :show, status: :created, location: @fieldset }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @fieldset.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /fieldsets/:id
  def update
    respond_to do |format|
      if @fieldset.update(fieldset_params)
        format.html { redirect_to @fieldset, notice: 'Fieldset was successfully updated.' }
        format.json { render :show, status: :ok, location: @fieldset }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @fieldset.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /fieldsets/:id
  def destroy
    @fieldset.destroy
    respond_to do |format|
      format.html { redirect_to fieldsets_url, notice: 'Fieldset was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_fieldset
    @fieldset = Fieldset.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def fieldset_params
    params.require(:fieldset).permit(:name, :description)
  end
end
