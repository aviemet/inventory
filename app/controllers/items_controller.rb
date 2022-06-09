class ItemsController < ApplicationController
  include OwnableConcern
  include Searchable
  include AssignableConcern

  expose :items, -> { @active_company.items.includes_associated }
  expose :item
  expose :category, id: -> { request.params[:category_id] }

  # GET /hardware
  # GET /hardware.json
  def index
    self.items = search(items, sortable_fields)
    paginated_items = items.page(params[:page] || 1)

    render inertia: "Items/Index", props: {
      items: -> { ItemBlueprint.render_as_json(paginated_items, view: :associations) },
      pagination: -> { {
        count: items.count,
        **pagination_data(paginated_items)
      } }
    }
  end

  # GET /hardware/category/:category_id
  # GET /hardware/category/:category_id.json
  # def category
  #   # TODO: Consider another way of filtering without using routes
  #   self.items = items.where('model.category': Category.find(request.params[:category_id]))
  #   render :index
  # end

  # GET /hardware/:id
  # GET /hardware/:id.json
  def show
    render inertia: "Items/Show", props: {
      item: -> { ItemBlueprint.render_as_json(item, view: :associations) }
    }
  end

  # GET /hardware/new
  def new
    render inertia: "Items/New", props: {
      item: ItemBlueprint.render_as_json(Item.new, view: :new),
      models: @active_company.models.find_by_category(:Item).as_json,
      vendors: @active_company.vendors.as_json,
      locations: @active_company.locations.as_json,
    }
  end

  # GET /hardware/:id/edit
  def edit
    render inertia: "Items/Edit", props: {
      item: ItemBlueprint.render_as_json(item),
      models: @active_company.models.find_by_category(:Item).as_json,
      vendors: @active_company.vendors.as_json,
      locations: @active_company.locations.as_json,
    }
  end

  # GET /hardware/:id/clone
  def clone
    self.item = Item.find(params[:id]).dup
    self.item.serial = nil
    self.item.asset_tag = nil
    self.item
    render inertia: "Items/Clone"
  end

  # POST /hardware
  # POST /hardware.json
  def create
    item.company = @active_company
    if item.save
      redirect_to item, notice: 'Item was successfully created'
    else
      redirect_to new_item_path, inertia: { errors: item.errors }
    end
  end

  # PATCH/PUT /hardware/:id
  # PATCH/PUT /hardware/:id.json
  def update
    if item.update(item_params)
      redirect_to item, notice: 'Item was successfully updated'
    else
      redirect_to edit_item_path, inertia: { errors: item.errors }
    end
  end

  # DELETE /hardware/:id
  # DELETE /hardware/:id.json
  def destroy
    item.destroy
    respond_to do |format|
      format.html { redirect_to items_url, notice: 'Item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def sortable_fields
    %w(name asset_tag serial cost cost_cents purchased_at requestable models.name vendors.name categories.name manufacturers.name departments.name).freeze
  end

  def item_params
    params.require(:item).permit(:name, :asset_tag, :serial, :cost, :cost_cents, :cost_currency, :notes, :model_id, :vendor_id, :default_location_id, :parent_id, :purchased_at, :requestable, nics: [:mac, :ip])
  end
end
