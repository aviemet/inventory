class Api::OrdersController < ApplicationController
  expose :order, id: ->{ params[:slug] }, scope: ->{ @active_company.orders.includes_associated }, find_by: :slug

  # POST /api/orders
  def create
    order.company = @active_company

    if order.save
      render json: OrderBlueprint.render_as_json(order), status: 201
    else
      render json: { errors: order.errors }, status: 303
    end
  end

  # PATCH/PUT /api/orders/:id
  def update
    if order.update(order_params)
      render json: OrderBlueprint.render_as_json(order), status: 201
    else
      render json: { errors: order.errors }, status: 303
    end
  end

  private

  def order_params
    params.require(:order).permit(:number, :user_id, :notes, :submitted_at, :ordered_at, :expected_at, :delivered_at, :canceled_at, :returned_at, :discount_description, :returned_reason, :canceled_reason, :shipping_cost, :tax_cost, :discount_cost, :vendor_id)
  end
end
