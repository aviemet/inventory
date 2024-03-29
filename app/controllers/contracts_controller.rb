class ContractsController < ApplicationController
  include Searchable

  expose :contracts, -> { search(@active_company.contracts.includes_associated, sortable_fields) }
  expose :contract, id: ->{ params[:slug] }, scope: ->{ @active_company.contracts.includes_associated }, find_by: :slug

  # GET /contracts
  def index
    authorize contracts
    paginated_contracts = contracts.page(params[:page] || 1).per(current_user.limit(:contracts))

    render inertia: "Contracts/Index", props: {
      contracts: paginated_contracts.render(view: :index),
      pagination: -> { {
        count: contracts.count,
        **pagination_data(paginated_contracts)
      } }
    }
  end

  # GET /contracts/:slug
  def show
    authorize contract
    render inertia: "Contracts/Show", props: {
      contract: contract.render(view: :show),
    }
  end

  # GET /contracts/new
  def new
    authorize Contract
    render inertia: "Contracts/New", props: {
      contract: Contract.new.render(view: :form_data),
    }
  end

  # GET /contracts/:slug/edit
  def edit
    authorize contract
    render inertia: "Contracts/Edit", props: {
      contract: contract.render(view: :edit),
    }
  end

  # POST /contracts
  def create
    authorize Contract
    contract.company = @active_company

    if contract.save
      redirect_to contract, notice: 'Contract was successfully created'
    else
      redirect_to new_contract_path, inertia: { errors: contract.errors }
    end
  end

  # PATCH/PUT /contracts/:slug
  def update
    authorize contract
    if contract.update(contract_params)
      redirect_to contract, notice: 'Contract was successfully updated'
    else
      redirect_to edit_contract_path, inertia: { errors: contract.errors }
    end
  end

  # DELETE /contracts/:slug
  def destroy
    authorize contract
    contract.destroy
    redirect_to contracts_url, notice: 'Contract was successfully destroyed.'
  end

  private

  def sortable_fields
    %w(name begins_at ends_at vendors.name categories.name).freeze
  end

  def contract_params
    params.require(:contract).permit(:name, :number, :begins_at, :ends_at, :notes, :category_id, :vendor_id)
  end
end
