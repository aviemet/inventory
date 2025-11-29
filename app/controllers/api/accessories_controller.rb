class Api::AccessoriesController < Api::ApiController
  expose :accessories, -> { @active_company.accessories }
  expose :accessory, scope: ->{ @active_company.accessories }

  strong_params :accessory, permit: [:name, :location_id, :manager_id, :notes]

  # @route GET /api/accessories (api_accessories)
  def index
    render json: accessories.includes_associated.render
  end

  # @route GET /api/accessories/:id (api_accessory)
  def show
    render json: accessory.render
  end

  # @route GET /api/options/accessories (api_accessories_options)
  def options
    render json: accessories.render(view: :options)
  end

  # @route PATCH /api/accessories/:id (api_accessory)
  # @route PUT /api/accessories/:id (api_accessory)
  def update
    if accessory.update(accessory_params)
      render json: accessory.render, status: :created
    else
      render json: { errors: accessory.errors }, status: :see_other
    end
  end
end
