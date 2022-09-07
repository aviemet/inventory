class Api::CategoriesController < ApplicationController
  expose :category, -> { @active_company.categories.find_by_slug params[:slug] }

  # POST /api/categories
  def create
    category.company = @active_company

    if category.save
      render json: CategoryBlueprint.render_as_json(category), status: 201
    else
      render json: { errors: category.errors }, status: 303
    end
  end

  # PATCH/PUT /api/categories/:id
  def update
    if category.update(category_params)
      render json: CategoryBlueprint.render_as_json(category), status: 201
    else
      render json: { errors: category.errors }, status: 303
    end
  end

  private

  def category_params
    params.require(:category).permit(:name, :categorizable_type, :description)
  end
end
