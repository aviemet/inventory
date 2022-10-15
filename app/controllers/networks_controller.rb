class NetworksController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :networks, -> { search(@active_company.networks, sortable_fields) }
  expose :network

  # GET /networks
  # GET /networks.json
  def index
    paginated_networks = networks.page(params[:page] || 1)

    render inertia: "Networks/Index", props: {
      networks: -> { paginated_networks.render },
      pagination: -> { {
        count: networks.size,
        **pagination_data(paginated_networks)
      } },
    }
  end

  # GET /networks/:id
  def show
    ips = IpLease.includes(:item).in_network(self.network)

    render inertia: "Networks/Show", props: {
      network: -> { network.render(view: :details, page: (params[:page] || 1).to_i) },
      ips: -> { ips.render(view: :with_item) },
      pagination: -> { {
        count: network&.address&.size - 2,
        **host_pagination_data(network&.address)
      } }
    }
  end

  # GET /networks/new
  def new
    render inertia: "Networks/New", props: {
      network: -> { Network.new.render(view: :new) },
    }
  end

  # GET /networks/:id/edit
  def edit
    render inertia: "Networks/Edit", props: {
      network: -> { network.render(view: :edit) },
    }
  end

  # POST /networks
  def create
    network.company = @active_company
    if network.save
      redirect_to network, notice: 'Network was successfully created'
    else
      redirect_to new_network_path, inertia: { errors: network.errors }
    end
  end

  # PATCH/PUT /networks/:id
  def update
    if network.update(network_params)
      redirect_to network, notice: 'Network was successfully updated'
    else
      redirect_to edit_network_path, inertia: { errors: network.errors }
    end
  end

  # DELETE /networks/:id
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
