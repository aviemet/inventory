class CompaniesController < ApplicationController
  include Searchable

  load_and_authorize_resource find_by: :slug
  skip_authorize_resource only: [:new, :create]

  # GET /companies
  # GET /companies.json
  def index
    @companies = search(Company)
  end

  # GET /companies/:id
  # GET /companies/:id.json
  def show
  end

  # GET /companies/new
  def new
    @company = Company.new
  end

  # GET /companies/:id/edit
  def edit
  end

  # POST /companies
  # POST /companies.json
  def create
    @company = Company.new company_params

    respond_to do |format|
      if @company.save
        # Assign admin permissions to user creating the record
        current_user.add_role :admin, @company
        current_user.update(active_company: @company)

        format.html { redirect_to @company, notice: 'Company was successfully created.' }
        format.json { render :show, status: :created, location: @company }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @company.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /companies/:id
  # PATCH/PUT /companies/:id.json
  def update
    respond_to do |format|
      if @company.update(company_params)
        format.html { redirect_to @company, notice: 'Company was successfully updated.' }
        format.json { render :show, status: :ok, location: @company }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @company.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /companies/:id
  # DELETE /companies/:id.json
  def destroy
    @company.destroy
    respond_to do |format|
      format.html { redirect_to companies_url, notice: 'Company was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  # GET /companies/:id/snippet/:snippet
  def snippet
    respond_to do |format|
      format.html { render template: "companies/#{params[:snippet]}", layout: false }
    end
  end

  private

  def searchable_object
    Company
  end

  def sortable_fields
    %w(name locations.count departments.count assets.count people.count).freeze
  end

  def company_params
    params.require(:company).permit(:name)
  end
end
