class NicsIpsController < ApplicationController
  before_action :set_nics_ip, only: [:show, :edit, :update, :destroy]

  # GET /nics_ips
  # GET /nics_ips.json
  def index
    @nics_ips = NicsIp.all
  end

  # GET /nics_ips/1
  # GET /nics_ips/1.json
  def show
  end

  # GET /nics_ips/new
  def new
    @nics_ip = NicsIp.new
  end

  # GET /nics_ips/1/edit
  def edit
  end

  # POST /nics_ips
  # POST /nics_ips.json
  def create
    @nics_ip = NicsIp.new(nics_ip_params)

    respond_to do |format|
      if @nics_ip.save
        format.html { redirect_to @nics_ip, notice: 'Nics ip was successfully created.' }
        format.json { render :show, status: :created, location: @nics_ip }
      else
        format.html { render :new }
        format.json { render json: @nics_ip.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /nics_ips/1
  # PATCH/PUT /nics_ips/1.json
  def update
    respond_to do |format|
      if @nics_ip.update(nics_ip_params)
        format.html { redirect_to @nics_ip, notice: 'Nics ip was successfully updated.' }
        format.json { render :show, status: :ok, location: @nics_ip }
      else
        format.html { render :edit }
        format.json { render json: @nics_ip.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /nics_ips/1
  # DELETE /nics_ips/1.json
  def destroy
    @nics_ip.destroy
    respond_to do |format|
      format.html { redirect_to nics_ips_url, notice: 'Nics ip was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_nics_ip
      @nics_ip = NicsIp.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def nics_ip_params
      params.require(:nics_ip).permit(:nic_id, :ip_id, :active)
    end
end
