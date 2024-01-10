class Api::ItemsController < Api::ApiController
  expose :items, -> { @active_company.items }
  expose :item, scope: ->{ @active_company.items }

  # GET api/items
  # @route GET /api/hardware (api_items)
  def index
    render json: items.includes_associated.render
  end

  # GET api/items/:id
  # @route GET /api/hardware/:id (api_item)
  def show
    render json: item.render
  end

  # GET api/options/items
  # @route GET /api/options/items (api_items_options)
  def options
    render json: items.render(view: :options)
  end

  # @route PATCH /api/hardware/:id (api_item)
  # @route PUT /api/hardware/:id (api_item)
  def update
    if location.update(location_params)
      render json: location.render, status: :created
    else
      render json: { errors: location.errors }, status: :see_other
    end
  end
end
