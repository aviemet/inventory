class OrdersController < ApplicationController
  include Searchable

  expose :orders, -> { search(@active_company.orders.includes_associated, sortable_fields) }
  expose :order

  # GET /orders
  # GET /orders.json
  def index
    paginated_orders = orders.page(params[:page] || 1)

    render inertia: "Orders/Index", props: {
      orders: paginated_orders.render(view: :associations),
      pagination: -> { {
        count: orders.count,
        **pagination_data(paginated_orders)
      } }
    }
  end

  # GET /orders/1
  # GET /orders/1.json
  def show
    render inertia: "Orders/Show", props: {
      order: -> { order.render(view: :associations) }
    }
  end

  # GET /orders/new
  def new
    render inertia: "Orders/New", props: {
      order: Order.new({ ordered_at: Time.zone.now }).render(view: :new),
      vendors: -> { @active_company.vendors }
    }
  end

  # GET /orders/1/edit
  def edit
    render inertia: "Orders/Edit", props: {
      order: order.render(view: :edit),
      vendors: -> { @active_company.vendors }
    }
  end

  # POST /orders
  # POST /orders.json
  def create
    respond_to do |format|
      if order.save
        format.html { redirect_to order, notice: 'Order was successfully created.' }
        format.json { render :show, status: :created, location: order }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: order.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /orders/1
  # PATCH/PUT /orders/1.json
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

  # DELETE /orders/1
  # DELETE /orders/1.json
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
