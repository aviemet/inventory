class OrdersController < ApplicationController
  include Searchable

  before_action :set_order, only: [:show, :edit, :update, :destroy]
  before_action :set_view_data, only: [:index, :category]

  # GET /orders
  # GET /orders.json
  def index
    @orders = if params[:search]
      search(Order, params[:search], params[:page])
    else
      searchable_object.order(sort(Order)).page(params[:page])
    end
  end

  # GET /orders/1
  # GET /orders/1.json
  def show
  end

  # GET /orders/new
  def new
    @order = Order.new(ordered_at: Time.zone.now)
    @vendors = Vendor.all
  end

  # GET /orders/1/edit
  def edit
  end

  # POST /orders
  # POST /orders.json
  def create
    @order = Order.new(order_params)

    respond_to do |format|
      if @order.save
        format.html { redirect_to @order, notice: 'Order was successfully created.' }
        format.json { render :show, status: :created, location: @order }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /orders/1
  # PATCH/PUT /orders/1.json
  def update
    respond_to do |format|
      if @order.update(order_params)
        format.html { redirect_to @order, notice: 'Order was successfully updated.' }
        format.json { render :show, status: :ok, location: @order }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @order.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /orders/1
  # DELETE /orders/1.json
  def destroy
    @order.destroy
    respond_to do |format|
      format.html { redirect_to orders_url, notice: 'Order was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def searchable_object
    @active_company.orders.includes_associated
  end

  def sortable_fields
    %w(number users.person.full_name submitted_at ordered_at delivered_at canceled_at returned_at vendors.name).freeze
  end

  def set_view_data
    @hideable_fields = {"Purchased By": "users.person.full_name", "Submitted At": "submitted_at", "Ordered At": "ordered_at", "Delivered At": "delivered_at", "Canceled At": "canceled_at", "Returned At": "returned_at", Vendor: "vendors.name"}
  end

  def set_order
    @order = searchable_object.find(params[:id])
  end

  def order_params
    params.require(:order).permit(:number, :user_id, :notes, :submitted_at, :ordered_at, :expected_at, :delivered_at, :canceled_at, :returned_at, :discount_description, :returned_reason, :canceled_reason, :shipping, :tax, :discount, :vendor_id)
  end
end
