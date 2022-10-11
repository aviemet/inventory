class Api::ConsumablesController < ApplicationController
  expose :consumable, -> { @active_company.consumables.find(params[:id]) }

  # PATCH/PUT /api/consumables/:id
  def update
    if consumable.update(consumable_params)
      flash[:success] = "Successfully replenished #{consumable.name}"
      render json: consumable.render, status: 201
    else
      render json: { errors: consumable.errors }, status: 303
    end
  end

  private

  def consumable_params
    params.require(:consumable).permit(:name, :min_qty, :qty, :cost, :requestable, :notes, :manufacturer_id, :category_id, :vendor_id, :default_location_id)
  end
end
