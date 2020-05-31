class UserCompaniesController < ApplicationController
  before_action :set_user_company, only: [:show, :edit, :update, :destroy]

  # GET /user_companies
  # GET /user_companies.json
  def index
    @user_companies = UserCompany.all
  end

  # GET /user_companies/1
  # GET /user_companies/1.json
  def show
  end

  # GET /user_companies/new
  def new
    @user_company = UserCompany.new
  end

  # GET /user_companies/1/edit
  def edit
  end

  # POST /user_companies
  # POST /user_companies.json
  def create
    @user_company = UserCompany.new(user_company_params)

    respond_to do |format|
      if @user_company.save
        format.html { redirect_to @user_company, notice: 'User company was successfully created.' }
        format.json { render :show, status: :created, location: @user_company }
      else
        format.html { render :new }
        format.json { render json: @user_company.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /user_companies/1
  # PATCH/PUT /user_companies/1.json
  def update
    respond_to do |format|
      if @user_company.update(user_company_params)
        format.html { redirect_to @user_company, notice: 'User company was successfully updated.' }
        format.json { render :show, status: :ok, location: @user_company }
      else
        format.html { render :edit }
        format.json { render json: @user_company.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /user_companies/1
  # DELETE /user_companies/1.json
  def destroy
    @user_company.destroy
    respond_to do |format|
      format.html { redirect_to user_companies_url, notice: 'User company was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user_company
    @user_company = UserCompany.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def user_company_params
    params.require(:user_company).permit(:user_id, :company_id, :role_id)
  end
end
