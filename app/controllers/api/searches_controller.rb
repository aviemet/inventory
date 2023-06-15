class Api::SearchesController < Api::ApiController
  # expose :items, -> { @active_company.items }
  # expose :accessories, -> { @active_company.accessories }
  # expose :components, -> { @active_company.components }
  # expose :consumables, -> { @active_company.consumables }
  # expose :licenses, -> { @active_company.licenses }
  # expose :people, -> { @active_company.people }
  # expose :tickets, -> { current_user.person.tickets }
  # expose :networks, -> { @active_company.networks }
  # expose :vendors, -> { @active_company.vendors }
  # expose :contracts, -> { @active_company.contracts }

  def index
    render json: SearchSerializer.many(
      PgSearch.multisearch(params[:search])
        .order(:searchable_type, :content),
    )
  end
end

    # render json: {
    #   items: InertiaRails.lazy(items.render(view: :options)),
    #   accessories: InertiaRails.lazy(accessories.render(view: :options)),
    #   components: InertiaRails.lazy(components.render(view: :options)),
    #   consumables: InertiaRails.lazy(consumables.render(view: :options)),
    #   licenses: InertiaRails.lazy(licenses.render(view: :options)),
    #   people: InertiaRails.lazy(people.render(view: :options)),
    #   tickets: InertiaRails.lazy(tickets.render(view: :options)),
    #   networks: InertiaRails.lazy(networks.render(view: :options)),
    #   vendors: InertiaRails.lazy(vendors.render(view: :options)),
    #   contracts: InertiaRails.lazy(contracts.render(view: :options)),
    # }
