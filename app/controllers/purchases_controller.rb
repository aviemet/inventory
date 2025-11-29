class PurchasesController < ApplicationController
  before_action :set_purchase, only: [:show, :edit, :update, :destroy]

  # @route GET /purchases (purchases)
  def index
    @purchases = Purchase.all
    render inertia: "Purchases/Index"
  end

  # @route GET /purchases/:id (purchase)
  def show
    render inertia: "Purchases/Show"
  end

  # @route GET /purchases/new (new_purchase)
  def new
    @purchase = Purchase.new
    render inertia: "Purchases/New"
  end

  # @route GET /purchases/:id/edit (edit_purchase)
  def edit
    render inertia: "Purchases/Edit"
  end

  # @route POST /purchases (purchases)
  def create
    @purchase = Purchase.new(purchase_params)

    respond_to do |format|
      if @purchase.save
        format.html { redirect_to @purchase, notice: "Purchase was successfully created." }
        format.json { render :show, status: :created, location: @purchase }
      else
        format.html { render :new, status: :unprocessable_content }
        format.json { render json: @purchase.errors, status: :unprocessable_content }
      end
    end
  end

  # @route PATCH /purchases/:id (purchase)
  # @route PUT /purchases/:id (purchase)
  def update
    respond_to do |format|
      if @purchase.update(purchase_params)
        format.html { redirect_to @purchase, notice: "Purchase was successfully updated." }
        format.json { render :show, status: :ok, location: @purchase }
      else
        format.html { render :edit, status: :unprocessable_content }
        format.json { render json: @purchase.errors, status: :unprocessable_content }
      end
    end
  end

  # @route DELETE /purchases (purchases)
  # @route DELETE /purchases/:id (purchase)
  def destroy
    @purchase.destroy
    respond_to do |format|
      format.html { redirect_to purchases_url, notice: "Purchase was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

  def set_purchase
    @purchase = Purchase.find(params[:id])
  end

  def purchase_params
    params.expect(purchase: [:item_id, :price, :shipping, :tax, :qty, :notes])
  end
end
