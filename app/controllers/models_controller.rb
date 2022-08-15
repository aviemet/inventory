class ModelsController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :models, -> { Model.includes_associated }
  expose :model, -> { @active_company.models.includes_associated.find_by_slug(request.params[:slug]) || Model.new(model_params) }

  # GET /models
  def index
    self.models = search(models, sortable_fields)
    paginated_models = models.page(params[:page] || 1)

    render inertia: "Models/Index", props: {
      models: ModelBlueprint.render_as_json(paginated_models, view: :associations),
      pagination: -> { {
        count: models.count,
        **pagination_data(paginated_models)
      } }
    }
  end

  # GET /models/1
  def show
    render inertia: "Models/Show", props: {
      model: ModelBlueprint.render_as_json(model, view: :associations)
    }
  end

  # GET /models/new
  def new
    render inertia: "Models/New", props: {
      model: ModelBlueprint.render_as_json(Model.new, view: :new),
      categories: -> { @active_company.categories.find_by_type(:Model).as_json },
      manufacturers: -> { @active_company.manufacturers.as_json },
    }
  end

  # GET /models/1/edit
  def edit
    render inertia: "Models/Edit", props: {
      model: ModelBlueprint.render_as_json(model),
      categories: -> { @active_company.categories.find_by_type(:Model).as_json },
      manufacturers: -> { @active_company.manufacturers.as_json },
    }
  end

  # POST /models
  def create
    model.company = @active_company

    if request.params&.[](:redirect) == false
      
      if model.save
        render json: ModelBlueprint.render_as_json(model), status: 201
      else
        render json: { errors: model.errors }, status: 303
      end

    else

      if model.save
        redirect_to model, notice: 'Model was successfully created'
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
