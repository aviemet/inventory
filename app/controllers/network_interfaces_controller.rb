class NetworkInterfacesController < ApplicationController
  before_action :set_network_interface, only: [:show, :edit, :update, :destroy]

  # GET /network_interfaces
  # GET /network_interfaces.json
  def index
    @network_interfaces = NetworkInterface.all
  end

  # GET /network_interfaces/1
  # GET /network_interfaces/1.json
  def show
  end

  # GET /network_interfaces/new
  def new
    @network_interface = NetworkInterface.new
  end

  # GET /network_interfaces/1/edit
  def edit
  end

  # POST /network_interfaces
  # POST /network_interfaces.json
  def create
    @network_interface = NetworkInterface.new(network_interface_params)

    respond_to do |format|
      if @network_interface.save
        format.html { redirect_to @network_interface, notice: 'Network interface was successfully created.' }
        format.json { render :show, status: :created, location: @network_interface }
      else
        format.html { render :new }
        format.json { render json: @network_interface.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /network_interfaces/1
  # PATCH/PUT /network_interfaces/1.json
  def update
    respond_to do |format|
      if @network_interface.update(network_interface_params)
        format.html { redirect_to @network_interface, notice: 'Network interface was successfully updated.' }
        format.json { render :show, status: :ok, location: @network_interface }
      else
        format.html { render :edit }
        format.json { render json: @network_interface.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /network_interfaces/1
  # DELETE /network_interfaces/1.json
  def destroy
    @network_interface.destroy
    respond_to do |format|
      format.html { redirect_to network_interfaces_url, notice: 'Network interface was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_network_interface
      @network_interface = NetworkInterface.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def network_interface_params
      params.require(:network_interface).permit(:mac, :item_id)
    end
end
