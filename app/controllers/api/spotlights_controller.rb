class Api::SpotlightsController < Api::ApiController
  expose :items, -> { @active_company.items }
  expose :accessories, -> { @active_company.accessories }
  expose :components, -> { @active_company.components }
  expose :consumables, -> { @active_company.consumables }
  expose :licenses, -> { @active_company.licenses }
  expose :people, -> { @active_company.people }
  expose :tickets, -> { current_user.person.tickets }
  expose :networks, -> { @active_company.networks }
  expose :vendors, -> { @active_company.vendors }
  expose :contracts, -> { @active_company.contracts }

  # @route GET /api/spotlights (api_spotlights)
  def index
    render json: {
      items: items.render(view: :spotlight),
      accessories: accessories.render(view: :spotlight),
      components: components.render(view: :spotlight),
      consumables: consumables.render(view: :spotlight),
      licenses: licenses.render(view: :spotlight),
      people: people.render(view: :spotlight),
      tickets: tickets.render(view: :spotlight),
      networks: networks.render(view: :spotlight),
      vendors: vendors.render(view: :spotlight),
      contracts: contracts.render(view: :spotlight),
    }
  end
end
