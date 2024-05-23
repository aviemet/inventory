class OrdersController < ApplicationController
  include Searchable

  expose :orders, -> { search(@active_company.orders.includes_associated, sortable_fields) }
  expose :order, scope: ->{ @active_company.orders }, find: ->(id, scope){ scope.includes_associated.find(id) }

  # @route GET /orders (orders)
  def index
    paginated_orders = orders.page(params[:page] || 1).per(current_user.limit(:orders))

    render inertia: "Orders/Index", props: {
      orders: paginated_orders.render(view: :index),
      pagination: -> { {
        count: orders.count,
        **pagination_data(paginated_orders)
      } }
    }
  end

  # @route GET /orders/:id (order)
  def show
    render inertia: "Orders/Show", props: {
      order: -> { order.render(view: :show) }
    }
  end

  # @route GET /orders/new (new_order)
  def new
    render inertia: "Orders/New", props: {
      order: Order.new({ ordered_at: Time.zone.now }).render(view: :form_data),
      vendors: -> { @active_company.vendors }
    }
  end

  # @route GET /orders/:id/edit (edit_order)
  def edit
    render inertia: "Orders/Edit", props: {
      order: order.render(view: :edit),
      vendors: -> { @active_company.vendors }
    }
  end

  # @route POST /orders (orders)
  def create
    authorize Order

    if order.save
      redirect_to order, notice: 'Purchase order was successfully created'
    else
      redirect_to new_order_path, inertia: { errors: order.errors }
    end
  end

  # @route PATCH /orders/:id (order)
  # @route PUT /orders/:id (order)
  def update
    respond_to do |format|
      if order.update(order_params)
        format.html { redirect_to order, notice: 'Order was successfully updated.' }
        format.json { render :show, status: :ok, location: order }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: order.errors, status: :unprocessable_entity }
      end
    end
  end

  # @route DELETE /orders (orders)
  # @route DELETE /orders/:id (order)
  def destroy
    order.destroy
    respond_to do |format|
      format.html { redirect_to orders_url, notice: 'Order was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def sortable_fields
    %w(number users.person.full_name submitted_at ordered_at delivered_at canceled_at returned_at vendors.name).freeze
  end

  def order_params
    params.require(:order).permit(:number, :user_id, :notes, :submitted_at, :ordered_at, :expected_at, :delivered_at, :canceled_at, :returned_at, :discount_description, :returned_reason, :canceled_reason, :shipping, :tax, :discount, :vendor_id)
  end
end
