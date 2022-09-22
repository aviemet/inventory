class OwnershipsController < ApplicationController
  expose :ownership

  # GET /ownerships
  def index
  end

  # GET /ownerships/1
  def show
  end

  # GET /ownerships/new
  def new
  end

  # GET /ownerships/1/edit
  def edit
  end

  # POST /ownerships
  def create
    respond_to do |format|
      if ownership.save
        format.html { redirect_to ownership, notice: 'Ownership was successfully created.' }
        format.json { render :show, status: :created, location: ownership }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: ownership.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ownerships/1
  def update
    respond_to do |format|
      if ownership.update(ownership_params)
        format.html { redirect_to ownership, notice: 'Ownership was successfully updated.' }
        format.json { render :show, status: :ok, location: ownership }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: ownership.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ownerships/1
  def destroy
    ownership.destroy
    respond_to do |format|
      format.html { redirect_to ownerships_url, notice: 'Ownership was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def ownership_params
    params.require(:ownership).permit(:company_id, :ownable_id, :ownable_type)
  end
end
