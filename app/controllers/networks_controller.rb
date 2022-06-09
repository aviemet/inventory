class NetworksController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :networks, -> { @active_company.networks }
  expose :network

  # GET /networks
  # GET /networks.json
  def index
    self.networks = search(networks, sortable_fields)
    paginated_networks = networks.page(params[:page] || 1)

    render inertia: "Networks/Index", props: {
      networks: -> { NetworkBlueprint.render_as_json(paginated_networks) },
      pagination: -> { {
        count: networks.count,
        **pagination_data(paginated_networks)
      } }
    }
  end

  # GET /networks/1
  # GET /networks/1.json
  def show
    @ips = IpLease.includes(:item).in_network(self.network)
    render inertia: "Networks/Show", props: {
      network: -> { NetworkBlueprint.render_as_json(network, view: :details) },
      ips: -> { IpLeaseBlueprint.render_as_json(IpLease.includes(:item).in_network(self.network))}
    }
  end

  # GET /networks/new
  def new
    render inertia: "Networks/New"
  end

  # GET /networks/1/edit
  def edit
    render inertia: "Networks/Edit"
  end

  # POST /networks
  # POST /networks.json
  def create
    network.company = Company.find(company_params[:id])
    respond_to do |format|
      if network.save
        format.html { redirect_to network, notice: 'Network was successfully created.' }
        format.json { render :show, status: :created, location: network }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: network.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /networks/1
  # PATCH/PUT /networks/1.json
  def update
    respond_to do |format|
      if network.update!(network_params)
        format.html { redirect_to network, notice: 'Network was successfully updated.' }
        format.json { render :show, status: :ok, location: network }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: network.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /networks/1
  # DELETE /networks/1.json
  def destroy
    network.destroy
    respond_to do |format|
      format.html { redirect_to networks_url, notice: 'Network was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def sortable_fields
    %w(name address gateway dhcp_start dhcp_end vlan_id).freeze
  end

  def network_params
    params.require(:network).permit(:name, :ip, :gateway, :dhcp_start, :dhcp_end, :vlan_id)
  end
end
