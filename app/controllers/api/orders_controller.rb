class Api::OrdersController < Api::ApiController
  expose :order, id: ->{ params[:slug] }, scope: ->{ @active_company.orders.includes_associated }, find_by: :slug

  strong_params :order, permit: [:number, :user_id, :notes, :submitted_at, :ordered_at, :expected_at, :delivered_at, :canceled_at, :returned_at, :discount_description, :returned_reason, :canceled_reason, :shipping_cost, :tax_cost, :discount_cost, :vendor_id]

  # @route POST /api/orders (api_orders)
  def create
    order.company = @active_company

    if order.save
      render json: order.render, status: :created
    else
      render json: { errors: order.errors }, status: :see_other
    end
  end

  # @route PATCH /api/orders/:id (api_order)
  # @route PUT /api/orders/:id (api_order)
  def update
    if order.update(order_params)
      render json: order.render, status: :created
    else
      render json: { errors: order.errors }, status: :see_other
    end
  end

  private
end
