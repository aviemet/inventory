class ModelsController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :models, -> { Model.includes_associated }
  expose :model, find_by: :slug

  # GET /models
  # GET /models.json
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
  # GET /models/1.json
  def show
    render inertia: "Models/Show"
  end

  # GET /models/new
  def new
    render inertia: "Models/New"
  end

  # GET /models/1/edit
  def edit
    render inertia: "Models/Edit"
  end

  # POST /models
  # POST /models.json
  def create
    respond_to do |format|
      if @model.save
        format.html { redirect_to @model, notice: 'Model was successfully created.' }
        format.json { render :show, status: :created, location: @model }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @model.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /models/1
  # PATCH/PUT /models/1.json
  def update
    respond_to do |format|
      if @model.update(model_params)
        format.html { redirect_to @model, notice: 'Model was successfully updated.' }
        format.json { render :show, status: :ok, location: @model }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @model.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /models/1
  # DELETE /models/1.json
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
    params.require(:model).permit(:name, :manufacturer_id, :category_id, :model_number, :notes)
  end
end
