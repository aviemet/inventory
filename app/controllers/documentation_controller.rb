class DocumentationController < ApplicationController
  include Searchable

  expose :documentations, -> { search(@active_company.documentations.includes_associated, sortable_fields) }
  expose :documentation, scope: ->{ @active_company.documentations }, find: ->(id, scope){ scope.includes_associated.find(id) }

  # GET /documentations
  def index
    authorize documentations
    render inertia: "Documentation/Index", props: {
      documentations: -> { documentations.render(view: :index) }
    }
  end

  # GET /documentations/:id
  def show
    authorize documentation
    render inertia: "Documentation/Show", props: {
      documentation: -> { documentation.render(view: :show) }
    }
  end

  # GET /documentations/new
  def new
    authorize Documentation.new
    render inertia: "Documentation/New", props: {
      documentation: Documentation.new.render(view: :form_data)
    }
  end

  # GET /documentations/:id/edit
  def edit
    authorize documentation
    render inertia: "Documentation/Edit", props: {
      documentation: documentation.render(view: :edit)
    }
  end

  # POST /documentations
  def create
    authorize Documentation.new
    if documentation.save
      redirect_to @documentation, notice: "Documentation was successfully created."
    else
      redirect_to new_documentation_path, inertia: { errors: Documentation.errors }
    end
  end

  # PATCH/PUT /documentations/:id
  def update
    authorize documentation
    if documentation.update(documentation_params)
      redirect_to @documentation, notice: "Documentation was successfully updated."
    else
      redirect_to edit_documentation_path, inertia: { errors: Documentation.errors }
    end
  end

  # DELETE /documentations/:id
  def destroy
    authorize documentation
    documentation.destroy
    redirect_to documentations_url, notice: "Documentation was successfully destroyed."
  end

  private

  def sortable_fields
    %w(slug title body created_by_id).freeze
  end

  def documentation_params
    params.require(:documentation).permit(:slug, :title, :body, :created_by_id)
  end
end
