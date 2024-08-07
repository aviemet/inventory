class CategoriesController < ApplicationController

  expose :categories, -> { search(@active_company.categories.all, sortable_fields) }
  expose :category, id: ->{ params[:slug] }, scope: ->{ @active_company.categories.includes_associated }, find_by: :slug

  # @route GET /categories (categories)
  def index
    paginated_categories = categories.page(params[:page] || 1).per(current_user.limit(:categories))

    render inertia: "Categories/Index", props: {
      categories: paginated_categories.render(view: :index),
      pagination: -> { {
        count: categories.size,
        **pagination_data(paginated_categories)
      } }
    }
  end

  # @route GET /categories/:slug (category)
  def show
    paginated_records = search(category.records).page(params[:page] || 1)

    render inertia: "Categories/Show", props: {
      category: category.render(view: :show),
      records: paginated_records.render(view: :index),
      pagination: -> { {
        count: category.records.size,
        **pagination_data(paginated_records)
      } }
    }
  end

  # @route GET /categories/new (new_category)
  def new
    render inertia: "Categories/New", props: {
      category: Category.new.render(view: :form_data),
    }
  end

  # @route GET /categories/:slug/edit (edit_category)
  def edit
    render inertia: "Categories/Edit", props: {
      category: category.render(view: :edit)
    }
  end

  # @route POST /categories (categories)
  def create
    category = Category.new category_params
    category.company = @active_company
    if category.save
      redirect_to category, notice: 'Category was successfully created'
    else
      redirect_to new_category_path, inertia: { errors: category.errors }
    end
  end

  # @route PATCH /categories/:slug (category)
  # @route PUT /categories/:slug (category)
  def update
    if category.update(category_params)
      redirect_to category, notice: 'Category was successfully updated'
    else
      redirect_to edit_category_path, inertia: { errors: category.errors }
    end
  end

  # @route DELETE /categories (categories)
  # @route DELETE /categories/:slug (category)
  def destroy
    category.destroy
    respond_to do |format|
      format.html { redirect_to categories_url, notice: 'Category was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def sortable_fields
    %w(name categorizable_type qty).freeze
  end

  def category_params
    params.require(:category).permit(:categorizable_id, :categorizable_type, :name, :description)
  end
end
