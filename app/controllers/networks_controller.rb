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
      networks: -> { paginated_networks.render },
      pagination: -> { {
        count: networks.count,
        **pagination_data(paginated_networks)
      } }
    }
  end

  # GET /networks/1
  # GET /networks/1.json
  def show

    render inertia: "Networks/Show", props: {
      network: -> { network.render(view: :details) },
      ips: -> { IpLease.includes(:item).in_network(self.network).render }
    }
  end

  # GET /networks/new
  def new
    render inertia: "Networks/New", props: {
      network: -> { Network.new.render(view: :new) },
    }
  end

  # GET /networks/1/edit
  def edit
    render inertia: "Networks/Edit", props: {
      network: -> { network.render(view: :edit) },
    }
  end

  # POST /networks
  # POST /networks.json
  def create
    network.company = @active_company
    if network.save
      redirect_to network, notice: 'License was successfully created'
    else
      redirect_to new_network_path, inertia: { errors: network.errors }
    end
  end

  # PATCH/PUT /networks/1
  # PATCH/PUT /networks/1.json
  def update
    if network.update(network_params)
      redirect_to network, notice: 'License was successfully updated'
    else
      redirect_to edit_network_path, inertia: { errors: network.errors }
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
