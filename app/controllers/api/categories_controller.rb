class Api::CategoriesController < Api::ApiController
  expose :categories, -> {
    if params[:category_type]
      @active_company.categories.where(categorizable_type: params[:category_type])
    else
      @active_company.categories
    end
  }
  expose :category, id: ->{ params[:slug] }, scope: ->{ @active_company.categories }, find_by: :slug

  # @route GET /api/categories (api_categories)
  def index
    render json: categories.includes_associated.render
  end

  # @route GET /api/categories/:slug (api_category)
  def show
    render json: category.render
  end

  # @route GET /api/options/categories (api_categories_options)
  # @route GET /api/options/categories/:category_type (api_category_options)
  def options
    render json: categories.render(view: :options)
  end

  # @route POST /api/categories (api_categories)
  def create
    category.company = @active_company

    if category.save
      render json: category.render, status: :created
    else
      render json: { errors: category.errors }, status: :see_other
    end
  end

  # @route PATCH /api/categories/:slug (api_category)
  # @route PUT /api/categories/:slug (api_category)
  def update
    if category.update(category_params)
      render json: category.render, status: :created
    else
      render json: { errors: category.errors }, status: :see_other
    end
  end

  private

  def category_params
    params.require(:category).permit(:name, :categorizable_type, :description)
  end
end
