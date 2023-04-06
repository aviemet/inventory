class Api::PurchasesController < ApplicationController
  expose :purchase, id: ->{ params[:slug] }, scope: ->{ @active_company.purchases.includes_associated }, find_by: :slug

  # POST /api/purchases
  def create
    purchase.company = @active_company

    if purchase.save
      render json: PurchaseBlueprint.render_as_json(purchase), status: 201
    else
      render json: { errors: purchase.errors }, status: 303
    end
  end

  # PATCH/PUT /api/purchases/:id
  def update
    if purchase.update(purchase_params)
      render json: PurchaseBlueprint.render_as_json(purchase), status: 201
    else
      render json: { errors: purchase.errors }, status: 303
    end
  end

  private

  def purchase_params
    params.require(:purchase).permit(:purchasable_type, :purchasable_id, :order_id, :cost, :currency, :qty, :notes)
  end
end
