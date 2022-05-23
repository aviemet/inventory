class CompaniesController < ApplicationController
  include Searchable

  load_and_authorize_resource find_by: :slug
  skip_authorize_resource only: [:new, :create]

  expose :companies, -> { search(current_user.companies, sortable_fields) }
  expose :company, -> { current_user.companies.find_by_slug params[:slug] }

  # GET /companies
  # GET /companies.json
  def index
    paginated_companies = companies.page(params[:page] || 1)

    render inertia: "Companies/Index", props: {
      companies: CompanyBlueprint.render_as_json(companies, view: :counts),
      pagination: -> { {
        count: companies.count,
        **pagination_data(paginated_companies)
      } }
    }
  end

  # GET /companies/:id
  # GET /companies/:id.json
  def show
    ap({ slug: params[:company], company: company })
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
      if company.save
        # Assign admin permissions to user creating the record
        current_user.add_role :admin, company
        current_user.update(active_company: company)

        redirect_to company, notice: 'Company was successfully created.'
      else
        redirect_to new_company_path, inertia: { errors: company.errors }
      end
  end

  # PATCH/PUT /companies/:id
  # PATCH/PUT /companies/:id.json
  def update
    if company.update(company_params)
      redirect_to company, notice: 'Company was successfully updated.'
    else
      redirect_to edit_company_path, inertia: { errors: company.errors }
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
