class FieldsetsController < ApplicationController
  before_action :set_fieldset, only: [:show, :edit, :update, :destroy]

  strong_params :fieldset, permit: [:name, :description]

  # @route GET /fieldsets (fieldsets)
  def index
    @fieldsets = Fieldset.all
  end

  # @route GET /fieldsets/:id (fieldset)
  def show
  end

  # @route GET /fieldsets/new (new_fieldset)
  def new
    @fieldset = Fieldset.new
  end

  # @route GET /fieldsets/:id/edit (edit_fieldset)
  def edit
  end

  # @route POST /fieldsets (fieldsets)
  def create
    @fieldset = Fieldset.new(fieldset_params)

    respond_to do |format|
      if @fieldset.save
        format.html { redirect_to @fieldset, notice: "Fieldset was successfully created." }
        format.json { render :show, status: :created, location: @fieldset }
      else
        format.html { render :new, status: :unprocessable_content }
        format.json { render json: @fieldset.errors, status: :unprocessable_content }
      end
    end
  end

  # @route PATCH /fieldsets/:id (fieldset)
  # @route PUT /fieldsets/:id (fieldset)
  def update
    respond_to do |format|
      if @fieldset.update(fieldset_params)
        format.html { redirect_to @fieldset, notice: "Fieldset was successfully updated." }
        format.json { render :show, status: :ok, location: @fieldset }
      else
        format.html { render :edit, status: :unprocessable_content }
        format.json { render json: @fieldset.errors, status: :unprocessable_content }
      end
    end
  end

  # @route DELETE /fieldsets/:id (fieldset)
  def destroy
    @fieldset.destroy
    respond_to do |format|
      format.html { redirect_to fieldsets_url, notice: "Fieldset was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_fieldset
    @fieldset = Fieldset.find(params[:id])
  end
end
