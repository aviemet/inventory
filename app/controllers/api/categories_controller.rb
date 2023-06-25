class Api::CategoriesController < Api::ApiController
  expose :categories, -> { @active_company.categories }
  expose :category, id: ->{ params[:slug] }, scope: ->{ @active_company.categories }, find_by: :slug

  # GET api/categories/options
  def index
    render json: categories.includes_associated.render
  end

  # GET api/categories/:id
  def show
    render json: @active_company.categories.find(params[:id]).render
  end

  # GET api/categories/:slug
  def slug
    render json: categories.render
  end

  # GET api/options/categories
  def options
    render json: @active_company.categories.render(view: :options)
  end

  # POST /api/categories
  def create
    category.company = @active_company

    if category.save
      render json: category.render(view: :options), status: 201
    else
      render json: { errors: category.errors }, status: 303
    end
  end

  # PATCH/PUT /api/categories/:slug
  def update
    if category.update(category_params)
      render json: category.render, status: 201
    else
      render json: { errors: category.errors }, status: 303
    end
  end

  private

  def category_params
    params.require(:category).permit(:name, :categorizable_type, :description)
  end
end
