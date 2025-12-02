class Api::ConsumablesController < Api::ApiController
  expose :consumable, id: ->{ params[:slug] }, scope: ->{ @active_company.consumables }, find_by: :slug

  strong_params :consumable, [:name, :min_qty, :qty, :cost, :requestable, :notes, :manufacturer_id, :category_id, :vendor_id, :default_location_id]

  # @route PATCH /api/consumables/:id (api_consumable)
  # @route PUT /api/consumables/:id (api_consumable)
  def update
    if consumable.update(consumable_params)
      flash[:success] = "Successfully replenished #{consumable.name}"
      render json: consumable.render, status: :created
    else
      render json: { errors: consumable.errors }, status: :see_other
    end
  end

  private
end
