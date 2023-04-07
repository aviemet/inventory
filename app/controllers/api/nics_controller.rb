class Api::NicsController < ApplicationController
  expose :nic, id: ->{ params[:slug] }, scope: ->{ @active_company.nics.includes_associated }, find_by: :slug

  # POST /api/nics
  def create
    nic.company = @active_company

    if nic.save
      render json: nic, status: 201
    else
      render json: { errors: nic.errors }, status: 303
    end
  end

  # PATCH/PUT /api/nics/:id
  def update
    if nic.update(nic_params)
      render json: nic, status: 201
    else
      render json: { errors: nic.errors }, status: 303
    end
  end

  private

  def nic_params
    params.require(:nic).permit(:mac, :nic_type, :item_id)
  end
end
