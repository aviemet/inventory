class Api::PurchasesController < Api::ApiController
  expose :purchase, id: ->{ params[:slug] }, scope: ->{ @active_company.purchases.includes_associated }, find_by: :slug

  # POST /api/purchases
  def create
    purchase.company = @active_company

    if purchase.save
      render json: purchase.render, status: :created
    else
      render json: { errors: purchase.errors }, status: :see_other
    end
  end

  # PATCH/PUT /api/purchases/:id
  def update
    if purchase.update(purchase_params)
      render json: purchase.render, status: :created
    else
      render json: { errors: purchase.errors }, status: :see_other
    end
  end

  private

  def purchase_params
    params.require(:purchase).permit(:purchasable_type, :purchasable_id, :order_id, :cost, :currency, :qty, :notes)
  end
end
