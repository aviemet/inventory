class IpLeasesController < ApplicationController
  before_action :set_ip_lease, only: [:show, :edit, :update, :destroy]

  # GET /ip_leases
  def index
    @ip_leases = IpLease.all
  end

  # GET /ip_leases/:id
  def show
  end

  # GET /ip_leases/new
  def new
    @ip_lease = IpLease.new
  end

  # GET /ip_leases/:id/edit
  def edit
  end

  # POST /ip_leases
  def create
    @ip_lease = IpLease.new(ip_lease_params)

    respond_to do |format|
      if @ip_lease.save
        format.html { redirect_to @ip_lease, notice: 'Ip lease was successfully created.' }
        format.json { render :show, status: :created, location: @ip_lease }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @ip_lease.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ip_leases/:id
  def update
    respond_to do |format|
      if @ip_lease.update(ip_lease_params)
        format.html { redirect_to @ip_lease, notice: 'Ip lease was successfully updated.' }
        format.json { render :show, status: :ok, location: @ip_lease }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @ip_lease.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ip_leases/:id
  def destroy
    @ip_lease.destroy
    respond_to do |format|
      format.html { redirect_to ip_leases_url, notice: 'Ip lease was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_ip_lease
    @ip_lease = IpLease.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def ip_lease_params
    params.require(:ip_lease).permit(:nic_id, :ip, :active)
  end
end
