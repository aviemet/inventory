class Api::ItemsController < Api::ApiController
  expose :items, -> { @active_company.items }
  expose :item, scope: ->{ @active_company.items }

  # @route GET /api/hardware (api_items)
  def index
    render json: items.includes_associated.render
  end

  # @route GET /api/hardware/:id (api_item)
  def show
    render json: item.render
  end

  # @route GET /api/options/items (api_items_options)
  def options
    render json: items.render(view: :options)
  end

  # @route PATCH /api/hardware/:id (api_item)
  # @route PUT /api/hardware/:id (api_item)
  def update
    if item.update(item_params)
      render json: item.render, status: :created
    else
      render json: { errors: item.errors }, status: :see_other
    end
  end
end
