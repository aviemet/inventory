class CategoriesController < ApplicationController
  expose :category

  # GET /categories
  # GET /categories.json
  def index
    @categories = Category.all
  end

  # GET /categories/:id
  # GET /categories/:id.json
  def show
  end

  # GET /categories/new
  def new
  end

  # GET /categories/:id/edit
  def edit
  end

  # POST /categories
  # POST /categories.json
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
  # PATCH/PUT /categories/:id.json
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
  # DELETE /categories/:id.json
  def destroy
    category.destroy
    respond_to do |format|
      format.html { redirect_to categories_url, notice: 'Category was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def category_params
    params.require(:category).permit(:categorizable_id, :categorizable_type, :name, :description)
  end
end
