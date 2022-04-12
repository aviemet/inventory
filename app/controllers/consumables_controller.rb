class ConsumablesController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :consumables, -> { @active_company.consumables.includes_associated }
  expose :consumable

  # GET /consumables(.json)
  def index
    self.consumables = search(consumables, sortable_fields)
    paginated_consumables = consumables.page(params[:page] || 1)

    render inertia: "Consumables/Index", props: {
      consumables: -> { ConsumableBlueprint.render_as_json(consumables, view: :associations) },
      pagination: -> { {
        count: consumables.count,
        **pagination_data(paginated_consumables)
      } }
    }
  end

  # GET /consumables/:id(.json)
  def show
    render inertia: "Consumables/Show"
  end

  # GET /consumables/new
  def new
    render inertia: "Consumables/New"
  end

  # GET /consumables/:id/edit
  def edit
    render inertia: "Consumables/Edit"
  end

  # POST /consumables(.json)
  def create
    consumable.company = Company.find(company_params[:id])
    respond_to do |format|
      if consumable.save
        format.html { redirect_to consumable, notice: 'Consumable was successfully created.' }
        format.json { render :show, status: :created, location: consumable }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: consumable.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /consumables/:id(.json)
  def update
    respond_to do |format|
      if consumable.update(consumable_params)
        format.html { redirect_to consumable, notice: 'Consumable was successfully updated.' }
        format.json { render :show, status: :ok, location: consumable }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: consumable.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /consumables/:id(.json)
  def destroy
    consumable.destroy
    respond_to do |format|
      format.html { redirect_to consumables_url, notice: 'Consumable was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def sortable_fields
    %w(name model_number min_qty qty cost requestable manufacturers.name categories.name vendors.name).freeze
  end

  def consumable_params
    params.require(:consumable).permit(:name, :model_number, :min_qty, :qty, :cost, :requestable, :notes, :manufacturer_id, :category_id, :vendor_id, :default_location_id)
  end
end
