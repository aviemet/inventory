class Api::ModelsController < Api::ApiController
  expose :models, -> { params[:category] ? @active_company.models.joins(:category).where(categories: { categorizable_type: params[:category] }) : @active_company.models }
  expose :model, id: ->{ params[:slug] }, scope: ->{ @active_company.models.includes_associated }, model: Model, find_by: :slug

  strong_params :model, [:id, :slug, :name, :model_number, :manufacturer_id, :category_id, :notes]

  # @route GET /api/models (api_models)
  def index
    render json: models.includes_associated.render
  end

  # @route GET /api/models/:slug (api_model)
  def show
    render json: model.render
  end

  # @route GET /api/options/models (api_models_options)
  def options
    render json: models.render(view: :options)
  end

  # POST api/models
  # @route POST /api/models (api_models)
  def create
    model.company = @active_company

    if model.save
      render json: model.render, status: :created
    else
      render json: { errors: model.errors }, status: :see_other
    end
  end

  # PATCH/PUT api/models/:id
  # @route PATCH /api/models/:slug (api_model)
  # @route PUT /api/models/:slug (api_model)
  def update
    if model.update(model_params)
      render json: model.render, status: :created
    else
      render json: { errors: model.errors }, status: :see_other
    end
  end

end
