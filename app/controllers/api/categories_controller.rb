class Api::CategoriesController < ApplicationController
  expose :category, -> { @active_company.categories.find_by_slug(params[:slug]) || Category.new(category_params) }

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
