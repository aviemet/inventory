class CompaniesController < ApplicationController
  include Searchable

  load_and_authorize_resource find_by: :slug
  skip_authorize_resource only: [:new, :create]

  expose :companies, -> { search(Company, sortable_fields) }
  expose :company, find_by: :slug

  # GET /companies
  # GET /companies.json
  def index
    render inertia: "Companies/Index", props: {
      companies: CompanyBlueprint.render_as_json(companies, view: :counts)
    }
  end

  # GET /companies/:id
  # GET /companies/:id.json
  def show
    render inertia: "Companies/Show", props: {
      company: company.as_json(include: [:locations, :departments, :items, :people])
    }
  end

  # GET /companies/new
  def new
    render inertia: "Companies/New"
  end

  # GET /companies/:id/edit
  def edit
    render inertia: "Companies/Edit", props: {
      company: company.as_json(include: [:locations, :departments, :items, :people])
    }
  end

  # POST /companies
  # POST /companies.json
  def create
    respond_to do |format|
      if company.save
        # Assign admin permissions to user creating the record
        current_user.add_role :admin, company
        current_user.update(active_company: company)

        format.html { redirect_to company, notice: 'Company was successfully created.' }
        format.json { render :show, status: :created, location: company }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: company.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /companies/:id
  # PATCH/PUT /companies/:id.json
  def update
    respond_to do |format|
      if company.update(company_params)
        format.html { redirect_to company, notice: 'Company was successfully updated.' }
        format.json { render :show, status: :ok, location: company }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: company.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /companies/:id
  # DELETE /companies/:id.json
  def destroy
    company.destroy
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

  def sortable_fields
    %w(name locations.count departments.count assets.count people.count).freeze
  end

  def company_params
    params.require(:company).permit(:name)
  end
end
