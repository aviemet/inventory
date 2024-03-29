class Api::ModelsController < Api::ApiController
  expose :models, -> { params[:category] ? @active_company.models.find_by_category(params[:category]) : @active_company.models }
  expose :model, id: ->{ params[:slug] }, scope: ->{ @active_company.models.includes_associated }, model: Model, find_by: :slug

  # GET api/models/options
  def index
    render json: models.includes_associated.render
  end

  # GET api/models/:slug
  def show
    render json: model.render
  end

  # GET api/options/models
  def options
    render json: models.render(view: :options)
  end

  # POST api/models
  def create
    model.company = @active_company

    if model.save
      render json: model.render, status: 201
    else
      render json: { errors: model.errors }, status: 303
    end
  end

  # PATCH/PUT api/models/:id
  def update
    if model.update(model_params)
      render json: model.render, status: 201
    else
      render json: { errors: model.errors }, status: 303
    end
  end

  private

  def model_params
    params.require(:model).permit(:id, :slug, :name, :model_number, :manufacturer_id, :category_id, :notes)
  end
end
