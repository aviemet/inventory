class NetworksController < ApplicationController
  include OwnableConcern

  expose :networks, -> { search(@active_company.networks, sortable_fields) }
  expose :network, scope: ->{ @active_company.networks }, find: ->(id, scope){ scope.find(id) }

  # @route GET /networks (networks)
  def index
    authorize networks
    paginated_networks = networks.page(params[:page] || 1)

    render inertia: "Networks/Index", props: {
      networks: -> { paginated_networks.render(view: :index) },
      pagination: -> { {
        count: networks.size,
        **pagination_data(paginated_networks)
      } },
    }
  end

  # @route GET /networks/:id (network)
  def show
    authorize network
    ips = IpLease.includes(:item).find_in_network(self.network)

    render inertia: "Networks/Show", props: {
      network: -> { network.render(view: :show, options: {
        page: (params[:page] || 1).to_i
      },) },
      ips: -> { ips.render(view: :show) },
      pagination: -> { {
        count: (network.address&.size || 2) - 2,
        **host_pagination_data(network.address)
      } }
    }
  end

  # @route GET /networks/new (new_network)
  def new
    authorize Network
    render inertia: "Networks/New", props: {
      network: -> { Network.new.render(view: :form_data) },
    }
  end

  # @route GET /networks/:id/edit (edit_network)
  def edit
    authorize network
    render inertia: "Networks/Edit", props: {
      network: -> { network.render(view: :edit) },
    }
  end

  # @route POST /networks (networks)
  def create
    authorize Network
    network.company = @active_company
    if network.save
      redirect_to network, notice: "Network was successfully created"
    else
      redirect_to new_network_path, inertia: { errors: network.errors }
    end
  end

  # @route PATCH /networks/:id (network)
  # @route PUT /networks/:id (network)
  def update
    authorize network
    if network.update(network_params)
      redirect_to network, notice: "Network was successfully updated"
    else
      redirect_to edit_network_path, inertia: { errors: network.errors }
    end
  end

  # @route DELETE /networks (networks)
  # @route DELETE /networks/:id (network)
  def destroy
    authorize network
    network.destroy
    respond_to do |format|
      format.html { redirect_to networks_url, notice: "Network was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  def host_pagination_data(_address)
    size = network&.address&.size
    pages = [(size / 256).to_i, 1].max
    limit = params[:limit] || 256
    current_page = params[:page] ? params[:page].to_i : 1

    {
      pages:,
      limit:,
      current_page:,
      next_page: current_page + 1 > pages ? nil : current_page + 1,
      prev_page: current_page - 1 < 0 ? nil : current_page - 1,
      is_first_page: current_page == 1,
      is_last_page: current_page == pages
    }
  end

  def sortable_fields
    %w(name address gateway dhcp_start dhcp_end vlan_id).freeze
  end

  def network_params
    params.expect(network: [:name, :address, :gateway, :dhcp_start, :dhcp_end, :vlan_id, :notes])
  end
end
