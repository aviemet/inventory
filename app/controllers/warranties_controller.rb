class WarrantiesController < ApplicationController
  before_action :set_warranty, only: [:show, :edit, :update, :destroy]

  # GET /warranties
  def index
    @warranties = Warranty.all
    render inertia: "Warranties/Index"
  end

  # GET /warranties/:id
  def show
    render inertia: "Warranties/Show"
  end

  # GET /warranties/new
  def new
    @warranty = Warranty.new
    render inertia: "Warranties/New"
  end

  # GET /warranties/:id/edit
  def edit
    render inertia: "Warranties/Edit"
  end

  # POST /warranties
  def create
    @warranty = Warranty.new(warranty_params)

    respond_to do |format|
      if @warranty.save
        format.html { redirect_to @warranty, notice: 'Warranty was successfully created.' }
        format.json { render :show, status: :created, location: @warranty }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @warranty.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /warranties/:id
  def update
    respond_to do |format|
      if @warranty.update(warranty_params)
        format.html { redirect_to @warranty, notice: 'Warranty was successfully updated.' }
        format.json { render :show, status: :ok, location: @warranty }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @warranty.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /warranties/:id
  def destroy
    @warranty.destroy
    respond_to do |format|
      format.html { redirect_to warranties_url, notice: 'Warranty was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def set_warranty
    @warranty = Warranty.find(params[:id])
  end

  def warranty_params
    params.require(:warranty).permit(:item_id, :length, :notes)
  end
end
