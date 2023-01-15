class ModelsController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :models, -> { search(@active_company.models, sortable_fields) }
  expose :model, -> { @active_company.models.includes_associated.find_by_slug(request.params[:slug]) }

  # GET /models
  def index
    paginated_models = models.page(params[:page] || 1)

    render inertia: "Models/Index", props: {
      models: paginated_models.render(view: :index),
      pagination: -> { {
        count: models.count,
        **pagination_data(paginated_models)
      } }
    }
  end

  # GET /models/1
  def show
    render inertia: "Models/Show", props: {
      model: model.render(view: :show)
    }
  end

  # GET /models/new
  def new
    render inertia: "Models/New", props: {
      model: Model.new.render(view: :new),
      categories: -> { @active_company.categories.find_by_type(:Model).render(view: :as_options) },
      manufacturers: -> { @active_company.manufacturers.render(view: :as_options) },
    }
  end

  # GET /models/1/edit
  def edit
    render inertia: "Models/Edit", props: {
      model: model.render(view: :edit),
      categories: -> { @active_company.categories.find_by_type(:Model).render(view: :as_options) },
      manufacturers: -> { @active_company.manufacturers.render(view: :as_options) },
    }
  end

  # POST /models
  def create
    model = Model.new(model_params)
    model.company = @active_company

    if model.save
      if request.params&.[](:redirect) == false
        render json: model.render, status: 201
      else
        redirect_to model, notice: 'Model was successfully created'
      end
    else
      if request.params&.[](:redirect) == false
        render json: { errors: model.errors }, status: 303
      else
        redirect_to new_model_path, inertia: { errors: model.errors }
      end
    end
  end

  # PATCH/PUT /models/1
  def update
    if model.update(model_params)
      redirect_to model, notice: 'Model was successfully updated'
    else
      redirect_to edit_model_path, inertia: { errors: model.errors }
    end
  end

  # DELETE /models/1
  def destroy
    @model.destroy
    respond_to do |format|
      format.html { redirect_to models_url, notice: 'Model was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def sortable_fields
    %w(name model_number manufacturers.name categories.name).freeze
  end

  def model_params
    params.require(:model).permit(:name, :model_number, :manufacturer_id, :category_id, :notes)
  end
end
