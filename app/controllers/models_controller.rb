class ModelsController < ApplicationController
  include OwnableConcern

  expose :models, -> { search(@active_company.models.includes_associated) }
  expose :model, id: ->{ params[:slug] }, scope: ->{ @active_company.models.includes_associated }, find_by: :slug

  strong_params :model, permit: [:name, :model_number, :manufacturer_id, :category_id, :notes]

  sortable_fields %w(name model_number manufacturers.name categories.name)

  # @route GET /models (models)
  def index
    authorize models
    paginated_models = models.page(params[:page] || 1).per(current_user.limit(:models))

    render inertia: "Models/Index", props: {
      models: paginated_models.render(view: :index),
      pagination: -> { {
        count: models.count,
        **pagination_data(paginated_models)
      } }
    }
  end

  # @route GET /models/:slug (model)
  def show
    authorize model
    render inertia: "Models/Show", props: {
      model: model.render(view: :show)
    }
  end

  # @route GET /models/new (new_model)
  def new
    authorize Model
    render inertia: "Models/New", props: {
      model: Model.new.render(view: :form_data),
    }
  end

  # @route GET /models/:slug/edit (edit_model)
  def edit
    authorize model
    render inertia: "Models/Edit", props: {
      model: model.render(view: :edit),
    }
  end

  # @route POST /models (models)
  def create
    authorize Model
    model = Model.new(model_params)
    model.company = @active_company

    if model.save
      if request.params&.[](:redirect) == false
        render json: model.render, status: :created
      else
        redirect_to model, notice: "Model was successfully created"
      end
    elsif request.params&.[](:redirect) == false
      render json: { errors: model.errors }, status: :see_other
    else
      redirect_to new_model_path, inertia: { errors: model.errors }
    end
  end

  # @route PATCH /models/:slug (model)
  # @route PUT /models/:slug (model)
  def update
    authorize model
    if model.update(model_params)
      redirect_to model, notice: "Model was successfully updated"
    else
      redirect_to edit_model_path, inertia: { errors: model.errors }
    end
  end

  # @route DELETE /models (models)
  # @route DELETE /models/:slug (model)
  def destroy
    authorize model
    model.destroy
    respond_to do |format|
      format.html { redirect_to models_url, notice: "Model was successfully destroyed." }
      format.json { head :no_content }
    end
  end
end
