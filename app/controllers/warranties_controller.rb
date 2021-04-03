class WarrantiesController < ApplicationController
  before_action :set_warranty, only: [:show, :edit, :update, :destroy]

  # GET /warranties
  # GET /warranties.json
  def index
    @warranties = Warranty.all
  end

  # GET /warranties/1
  # GET /warranties/1.json
  def show
  end

  # GET /warranties/new
  def new
    @warranty = Warranty.new
  end

  # GET /warranties/1/edit
  def edit
  end

  # POST /warranties
  # POST /warranties.json
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

  # PATCH/PUT /warranties/1
  # PATCH/PUT /warranties/1.json
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

  # DELETE /warranties/1
  # DELETE /warranties/1.json
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
