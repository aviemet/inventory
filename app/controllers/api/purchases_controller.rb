class Api::PurchasesController < Api::ApiController
  expose :purchase, id: ->{ params[:slug] }, scope: ->{ @active_company.purchases.includes_associated }, find_by: :slug

  strong_params :purchase, permit: [:purchasable_type, :purchasable_id, :order_id, :cost, :currency, :qty, :notes]

  # @route POST /api/purchases (api_purchases)
  def create
    purchase.company = @active_company

    if purchase.save
      render json: purchase.render, status: :created
    else
      render json: { errors: purchase.errors }, status: :see_other
    end
  end

  # @route PATCH /api/purchases/:id (api_purchase)
  # @route PUT /api/purchases/:id (api_purchase)
  def update
    if purchase.update(purchase_params)
      render json: purchase.render, status: :created
    else
      render json: { errors: purchase.errors }, status: :see_other
    end
  end

  private
end
