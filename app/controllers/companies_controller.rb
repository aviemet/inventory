class CompaniesController < ApplicationController

  expose :companies, -> { search(current_user.companies, sortable_fields) }
  expose :company, id: ->{ params[:slug] }, scope: ->{ current_user.companies }, find_by: :slug

  # @route GET /companies (companies)
  def index
    authorize companies
    paginated_companies = companies.page(params[:page] || 1).per(current_user.limit(:companies))

    render inertia: "Companies/Index", props: {
      companies: paginated_companies.render(view: :index),
      pagination: -> { {
        count: companies.count,
        **pagination_data(paginated_companies)
      } }
    }
  end

  # @route GET /companies/:slug (company)
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

  # @route GET /companies/new (new_company)
  def new
    authorize Company
    render inertia: "Companies/New", props: {
      company: Company.new.render(view: :form_data)
    }
  end

  # @route GET /companies/:slug/edit (edit_company)
  def edit
    authorize company
    render inertia: "Companies/Edit", props: {
      company: -> { company.render(view: :edit) }
    }
  end

  # @route POST /companies (companies)
  def create
    authorize Company
    if Company.new(company_params).save
      # Assign admin permissions to user creating the record
      current_user.add_role :admin, company
      current_user.update(active_company: company)

      redirect_to company, notice: "Company was successfully created."
    else
      redirect_to new_company_path, inertia: { errors: company.errors }
    end
  end

  # @route PATCH /companies/:slug (company)
  # @route PUT /companies/:slug (company)
  def update
    authorize company
    if company.update(company_params)
      redirect_to company, notice: "Company was successfully updated."
    else
      redirect_to edit_company_path, inertia: { errors: company.errors }
    end
  end

  # @route DELETE /companies (companies)
  # @route DELETE /companies/:slug (company)
  def destroy
    authorize company
    company.destroy
    respond_to do |format|
      format.html { redirect_to companies_url, notice: "Company was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  # TODO: This probably is unused and needs to go
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
    params.expect(company: [:name])
  end
end
