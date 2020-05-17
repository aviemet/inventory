class Ipv4AddressesController < ApplicationController
  before_action :set_ipv4_address, only: [:show, :edit, :update, :destroy]

  # GET /ipv4_addresses
  # GET /ipv4_addresses.json
  def index
    @ipv4_addresses = Ipv4Address.all
  end

  # GET /ipv4_addresses/1
  # GET /ipv4_addresses/1.json
  def show
  end

  # GET /ipv4_addresses/new
  def new
    @ipv4_address = Ipv4Address.new
  end

  # GET /ipv4_addresses/1/edit
  def edit
  end

  # POST /ipv4_addresses
  # POST /ipv4_addresses.json
  def create
    @ipv4_address = Ipv4Address.new(ipv4_address_params)

    respond_to do |format|
      if @ipv4_address.save
        format.html { redirect_to @ipv4_address, notice: 'Ipv4 address was successfully created.' }
        format.json { render :show, status: :created, location: @ipv4_address }
      else
        format.html { render :new }
        format.json { render json: @ipv4_address.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ipv4_addresses/1
  # PATCH/PUT /ipv4_addresses/1.json
  def update
    respond_to do |format|
      if @ipv4_address.update(ipv4_address_params)
        format.html { redirect_to @ipv4_address, notice: 'Ipv4 address was successfully updated.' }
        format.json { render :show, status: :ok, location: @ipv4_address }
      else
        format.html { render :edit }
        format.json { render json: @ipv4_address.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ipv4_addresses/1
  # DELETE /ipv4_addresses/1.json
  def destroy
    @ipv4_address.destroy
    respond_to do |format|
      format.html { redirect_to ipv4_addresses_url, notice: 'Ipv4 address was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ipv4_address
      @ipv4_address = Ipv4Address.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ipv4_address_params
      params.require(:ipv4_address).permit(:address)
    end
end
