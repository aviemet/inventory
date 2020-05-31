class InterfacesIpv4sController < ApplicationController
  before_action :set_interfaces_ipv4, only: [:show, :edit, :update, :destroy]

  # GET /interfaces_ipv4s
  # GET /interfaces_ipv4s.json
  def index
    @interfaces_ipv4s = InterfacesIpv4.all
  end

  # GET /interfaces_ipv4s/1
  # GET /interfaces_ipv4s/1.json
  def show
  end

  # GET /interfaces_ipv4s/new
  def new
    @interfaces_ipv4 = InterfacesIpv4.new
  end

  # GET /interfaces_ipv4s/1/edit
  def edit
  end

  # POST /interfaces_ipv4s
  # POST /interfaces_ipv4s.json
  def create
    @interfaces_ipv4 = InterfacesIpv4.new(interfaces_ipv4_params)

    respond_to do |format|
      if @interfaces_ipv4.save
        format.html { redirect_to @interfaces_ipv4, notice: 'Interfaces ipv4 was successfully created.' }
        format.json { render :show, status: :created, location: @interfaces_ipv4 }
      else
        format.html { render :new }
        format.json { render json: @interfaces_ipv4.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /interfaces_ipv4s/1
  # PATCH/PUT /interfaces_ipv4s/1.json
  def update
    respond_to do |format|
      if @interfaces_ipv4.update(interfaces_ipv4_params)
        format.html { redirect_to @interfaces_ipv4, notice: 'Interfaces ipv4 was successfully updated.' }
        format.json { render :show, status: :ok, location: @interfaces_ipv4 }
      else
        format.html { render :edit }
        format.json { render json: @interfaces_ipv4.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /interfaces_ipv4s/1
  # DELETE /interfaces_ipv4s/1.json
  def destroy
    @interfaces_ipv4.destroy
    respond_to do |format|
      format.html { redirect_to interfaces_ipv4s_url, notice: 'Interfaces ipv4 was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_interfaces_ipv4
    @interfaces_ipv4 = InterfacesIpv4.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def interfaces_ipv4_params
    params.require(:interfaces_ipv4).permit(:network_interface_id, :ipv4_address_id, :active)
  end
end
