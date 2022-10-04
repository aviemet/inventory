class Api::StatusTypesController < ApplicationController
  expose :status_type, -> { @active_company.status_types.find_by_slug(params[:slug]) || StatusType.new(status_type_params) }

  # POST /api/status_types
  def create
    status_type.company = @active_company

    if status_type.save
      render json: StatusTypeBlueprint.render_as_json(status_type), status: 201
    else
      render json: { errors: status_type.errors }, status: 303
    end
  end

  # PATCH/PUT /api/status_types/:id
  def update
    if status_type.update(status_type_params)
      render json: StatusTypeBlueprint.render_as_json(status_type), status: 201
    else
      render json: { errors: status_type.errors }, status: 303
    end
  end

  private

  def status_type_params
    params.require(:status_type).permit(:name)
  end
end
