class Api::SpotlightsController < ApplicationController
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

  def index
    render json: SpotlightBlueprint.render_as_json({
      items:,
      accessories:,
      components:,
      consumables:,
      licenses:,
      people:,
      tickets:,
      networks:,
      vendors:,
      contracts:,
    })
  end
end
