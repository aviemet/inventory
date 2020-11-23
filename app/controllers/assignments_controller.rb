class AssignmentsController < ApplicationController
  before_action :set_assignment, only: [:show, :edit, :update, :destroyt]

  # GET /assignment/:asset_type/:asset_id
  # GET /assignment/:asset_type/:asset_id.json
  def index
    @assignments = Assignment.all
  end

  # GET /assignment/:id
  # GET /assignment/:id.json
  def show
  end

  # GET /assignment/:asset_type/:asset_id/new
  def new
    @assignment = Assignment.new
    asset_class = params[:asset_type].capitalize.constantize
    @asset = asset_class.find(params[:asset_id])
    render "#{params[:asset_type].pluralize.downcase}/checkout"
  end

  # GET /assignment/:id/edit
  def edit
  end

  # POST /assignment/:asset_type/:asset_id
  # POST /assignment/:asset_type/:asset_id.json
  def create
    ap request.params
    @assignment = Assignment.new(assignment_params)

    respond_to do |format|
      if @assignment.save
        format.html { redirect_to @assignment, notice: 'Assignment was successfully created.' }
        format.json { render :show, status: :created, location: @assignment }
      else
        format.html { render :new }
        format.json { render json: @assignment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /assignment/:id
  # PATCH/PUT /assignment/:id.json
  def update
    respond_to do |format|
      if @assignment.update(assignment_params)
        format.html { redirect_to @assignment, notice: 'Assignment was successfully updated.' }
        format.json { render :show, status: :ok, location: @assignment }
      else
        format.html { render :edit }
        format.json { render json: @assignment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /assignment/:id
  # DELETE /assignment/:id.json
  def destroy
    @assignment.destroy
    respond_to do |format|
      format.html { redirect_to assignments_url, notice: 'Assignment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_assignment
    @assignment = Assignment.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def assignment_params
    params.require(:assignment).permit(:assignable_id, :assignable_type, :item_id, :active)
  end
end
