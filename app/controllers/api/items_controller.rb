class Api::ItemsController < Api::ApiController
  expose :items, -> { @active_company.items }
  expose :item, scope: ->{ @active_company.items }

  # GET api/items
  def index
    render json: items.includes_associated.render
  end

  # GET api/items/:id
  def show
    render json: item.render
  end

  # GET api/options/items
  def options
    render json: items.render(view: :options)
  end

  def update
    if location.update(location_params)
      render json: location.render, status: 201
    else
      render json: { errors: location.errors }, status: 303
    end
  end
end
