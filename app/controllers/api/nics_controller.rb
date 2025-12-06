class Api::NicsController < Api::ApiController
  expose :nic, id: ->{ params[:slug] }, scope: ->{ @active_company.nics.includes_associated }, find_by: :slug

  strong_params :nic, [:mac, :nic_type, :item_id]

  # @route POST /api/hardware/:item_id/nics (api_item_nics)
  def create
    nic.company = @active_company

    if nic.save
      render json: nic.render, status: :created
    else
      render json: { errors: nic.errors }, status: :see_other
    end
  end

  # @route PATCH /api/hardware/:item_id/nics/:id (api_item_nic)
  # @route PUT /api/hardware/:item_id/nics/:id (api_item_nic)
  def update
    if nic.update(nic_params)
      render json: nic.render, status: :created
    else
      render json: { errors: nic.errors }, status: :see_other
    end
  end
end
