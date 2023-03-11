class NicsController < ApplicationController
  before_action :set_nic, only: [:show, :edit, :update, :destroy]

  # GET /nics
  def index
    @nics = Nic.all
  end

  # GET /nics/:id
  def show
  end

  # GET /nics/new
  def new
    @nic = Nic.new
  end

  # GET /nics/:id/edit
  def edit
  end

  # POST /nics
  def create
    @nic = Nic.new(nic_params)

    respond_to do |format|
      if @nic.save
        format.html { redirect_to @nic, notice: 'Nic was successfully created.' }
        format.json { render :show, status: :created, location: @nic }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @nic.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /nics/:id
  def update
    respond_to do |format|
      if @nic.update(nic_params)
        format.html { redirect_to @nic, notice: 'Nic was successfully updated.' }
        format.json { render :show, status: :ok, location: @nic }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @nic.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /nics/:id
  def destroy
    @nic.destroy
    respond_to do |format|
      format.html { redirect_to nics_url, notice: 'Nic was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_nic
    @nic = Nic.find(params[:id])
  end

  def nic_params
    params.require(:nic).permit(:mac, :item_id)
  end
end
