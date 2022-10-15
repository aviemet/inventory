class CategoriesController < ApplicationController
  include Searchable

  expose :categories, -> {  search(@active_company.categories.all, sortable_fields) }
  expose :category, -> { @active_company.categories.find_by_slug(params[:slug]) }

  # GET /categories
  def index
    paginated_categories = categories.page(params[:page] || 1)

    render inertia: "Categories/Index", props: {
      categories: paginated_categories.render(view: :counts),
      pagination: -> { {
        count: categories.size,
        **pagination_data(paginated_categories)
      } }
    }
  end

  # GET /categories/:id
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

  # GET /categories/new
  def new
    render inertia: "Categories/New", props: {
      category: Category.new.render(view: :new),
    }
  end

  # GET /categories/:id/edit
  def edit
    render inertia: "Categories/Edit", props: {
      category: category.render(view: :edit)
    }
  end

  # POST /categories
  def create
    respond_to do |format|
      if category.save
        format.html { redirect_to category, notice: 'Category was successfully created.' }
        format.json { render :show, status: :created, location: category }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /categories/:id
  def update
    respond_to do |format|
      if category.update(category_params)
        format.html { redirect_to category, notice: 'Category was successfully updated.' }
        format.json { render :show, status: :ok, location: category }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /categories/:id
  def destroy
    category.destroy
    respond_to do |format|
      format.html { redirect_to categories_url, notice: 'Category was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def sortable_fields
    %w(name locations.count departments.count assets.count people.count).freeze
  end

  def category_params
    params.require(:category).permit(:categorizable_id, :categorizable_type, :name, :description)
  end
end
