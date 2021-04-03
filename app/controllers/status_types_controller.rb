class StatusTypesController < ApplicationController
  before_action :set_status_type, only: [:show, :edit, :update, :destroy]

  # GET /status_types
  # GET /status_types.json
  def index
    @status_types = StatusType.all
  end

  # GET /status_types/1
  # GET /status_types/1.json
  def show
  end

  # GET /status_types/new
  def new
    @status_type = StatusType.new
  end

  # GET /status_types/1/edit
  def edit
  end

  # POST /status_types
  # POST /status_types.json
  def create
    @status_type = StatusType.new(status_type_params)

    respond_to do |format|
      if @status_type.save
        format.html { redirect_to @status_type, notice: 'Status type was successfully created.' }
        format.json { render :show, status: :created, location: @status_type }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @status_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /status_types/1
  # PATCH/PUT /status_types/1.json
  def update
    respond_to do |format|
      if @status_type.update(status_type_params)
        format.html { redirect_to @status_type, notice: 'Status type was successfully updated.' }
        format.json { render :show, status: :ok, location: @status_type }
      else
        format.html { render :edit }
        format.json { render json: @status_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /status_types/1
  # DELETE /status_types/1.json
  def destroy
    @status_type.destroy
    respond_to do |format|
      format.html { redirect_to status_types_url, notice: 'Status type was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_status_type
    @status_type = StatusType.find(params[:id])
  end

  def status_type_params
    params.require(:status_type).permit(:name)
  end
end
