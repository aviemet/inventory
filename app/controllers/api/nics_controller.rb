class Api::NicsController < ApplicationController
  expose :nic, -> { @active_company.nics.find_by_slug(params[:slug]) || Nic.new(nic_params) }

  # POST /api/nics
  def create
    nic.company = @active_company

    if nic.save
      render json: NicBlueprint.render_as_json(nic), status: 201
    else
      render json: { errors: nic.errors }, status: 303
    end
  end

  # PATCH/PUT /api/nics/:id
  def update
    if nic.update(nic_params)
      render json: NicBlueprint.render_as_json(nic), status: 201
    else
      render json: { errors: nic.errors }, status: 303
    end
  end

  private

  def nic_params
    params.require(:nic).permit(:mac, :nic_type, :item_id)
  end
end
