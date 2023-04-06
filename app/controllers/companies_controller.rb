class CompaniesController < ApplicationController
  include Searchable

  expose :companies, -> { search(current_user.companies, sortable_fields) }
  expose :company, scope: ->{ current_user.companies }, find: ->(id, scope){ scope.find_by_slug(id) }

  # GET /companies
  def index
    authorize companies
    paginated_companies = companies.page(params[:page] || 1)

    render inertia: "Companies/Index", props: {
      companies: paginated_companies.render(view: :counts),
      pagination: -> { {
        count: companies.count,
        **pagination_data(paginated_companies)
      } }
    }
  end

  # GET /companies/:slug
  def show
    authorize company
    if company.nil?
      render inertia: "Error", props: { status: 404 }
    else
      render inertia: "Companies/Show", props: {
        company: -> { company.render }
      }
    end
  end

  # GET /companies/new
  def new
    authorize Company
    render inertia: "Companies/New", props: {
      company: Company.new.render(view: :new)
    }
  end

  # GET /companies/:slug/edit
  def edit
    authorize company
    render inertia: "Companies/Edit", props: {
      company: -> { company.render(view: :edit) }
    }
  end

  # POST /companies
  def create
    authorize Company
    if Company.new(company_params).save
      # Assign admin permissions to user creating the record
      current_user.add_role :admin, company
      current_user.update(active_company: company)

      redirect_to company, notice: 'Company was successfully created.'
    else
      redirect_to new_company_path, inertia: { errors: company.errors }
    end
  end

  # PATCH/PUT /companies/:slug
  def update
    authorize company
    if company.update(company_params)
      redirect_to company, notice: 'Company was successfully updated.'
    else
      redirect_to edit_company_path, inertia: { errors: company.errors }
    end
  end

  # DELETE /companies/:slug
  def destroy
    authorize company
    company.destroy
    respond_to do |format|
      format.html { redirect_to companies_url, notice: 'Company was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  # TODO: This probably is unused and needs to go
  # GET /companies/:slug/snippet/:snippet
  # def snippet
  #   respond_to do |format|
  #     format.html { render template: "companies/#{params[:snippet]}", layout: false }
  #   end
  # end

  private

  def sortable_fields
    %w(name locations.count departments.count assets.count people.count).freeze
  end

  def company_params
    params.require(:company).permit(:name)
  end
end
