class ConsumablesController < ApplicationController
  include Sortable
  include Searchable

  before_action :set_consumable, only: [:show, :edit, :update, :destroy]

  # GET /consumables
  # GET /consumables.json
  def index
    @consumables = if params[:search]
                     search(Consumable, params[:search], params[:page])
                   else
                     searchable_object.order(sort(Consumable)).page(params[:page])
                   end
  end

  # GET /consumables/:id
  # GET /consumables/:id.json
  def show
  end

  # GET /consumables/new
  def new
    @consumable = Consumable.new
  end

  # GET /consumables/:id/edit
  def edit
  end

  # POST /consumables
  # POST /consumables.json
  def create
    @consumable = Consumable.new(consumable_params)

    respond_to do |format|
      if @consumable.save
        format.html { redirect_to @consumable, notice: 'Consumable was successfully created.' }
        format.json { render :show, status: :created, location: @consumable }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @consumable.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /consumables/:id
  # PATCH/PUT /consumables/:id.json
  def update
    respond_to do |format|
      if @consumable.update(consumable_params)
        format.html { redirect_to @consumable, notice: 'Consumable was successfully updated.' }
        format.json { render :show, status: :ok, location: @consumable }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @consumable.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /consumables/:id
  # DELETE /consumables/:id.json
  def destroy
    @consumable.destroy
    respond_to do |format|
      format.html { redirect_to consumables_url, notice: 'Consumable was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def searchable_object
    @active_company.consumables.includes_associated
  end

  def sortable_fields
    %w(name model_number min_qty qty cost requestable manufacturers.name categories.name vendors.name).freeze
  end

  def set_consumable
    @consumable = Consumable.find(params[:id])
  end

  def consumable_params
    params.require(:consumable).permit(:name, :model_number, :min_qty, :qty, :cost, :requestable, :notes, :manufacturer_id, :category_id, :vendor_id, :default_location_id)
  end
end
