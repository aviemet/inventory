class Ipv6AddressesController < ApplicationController
  before_action :set_ipv6_address, only: [:show, :edit, :update, :destroy]

  # GET /ipv6_addresses
  # GET /ipv6_addresses.json
  def index
    @ipv6_addresses = Ipv6Address.all
  end

  # GET /ipv6_addresses/1
  # GET /ipv6_addresses/1.json
  def show
  end

  # GET /ipv6_addresses/new
  def new
    @ipv6_address = Ipv6Address.new
  end

  # GET /ipv6_addresses/1/edit
  def edit
  end

  # POST /ipv6_addresses
  # POST /ipv6_addresses.json
  def create
    @ipv6_address = Ipv6Address.new(ipv6_address_params)

    respond_to do |format|
      if @ipv6_address.save
        format.html { redirect_to @ipv6_address, notice: 'Ipv6 address was successfully created.' }
        format.json { render :show, status: :created, location: @ipv6_address }
      else
        format.html { render :new }
        format.json { render json: @ipv6_address.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ipv6_addresses/1
  # PATCH/PUT /ipv6_addresses/1.json
  def update
    respond_to do |format|
      if @ipv6_address.update(ipv6_address_params)
        format.html { redirect_to @ipv6_address, notice: 'Ipv6 address was successfully updated.' }
        format.json { render :show, status: :ok, location: @ipv6_address }
      else
        format.html { render :edit }
        format.json { render json: @ipv6_address.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ipv6_addresses/1
  # DELETE /ipv6_addresses/1.json
  def destroy
    @ipv6_address.destroy
    respond_to do |format|
      format.html { redirect_to ipv6_addresses_url, notice: 'Ipv6 address was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ipv6_address
      @ipv6_address = Ipv6Address.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ipv6_address_params
      params.require(:ipv6_address).permit(:address)
    end
end
