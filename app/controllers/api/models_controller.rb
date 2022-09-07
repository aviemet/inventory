class Api::ModelsController < ApplicationController
  expose :model, -> { @active_company.models.includes_associated.find_by_slug(request.params[:slug]) || Model.new(model_params) }

  # POST api/models
  def create
    model.company = @active_company
    
    if model.save
      render json: ModelBlueprint.render_as_json(model), status: 201
    else
      render json: { errors: model.errors }, status: 303
    end
  end

  # PATCH/PUT api/models/:id
  def update
    if model.update(model_params)
      render json: ModelBlueprint.render_as_json(model), status: 201
    else
      render json: { errors: model.errors }, status: 303
    end
  end

  private

  def model_params
    params.require(:model).permit(:name, :model_number, :manufacturer_id, :category_id, :notes)
  end
end
