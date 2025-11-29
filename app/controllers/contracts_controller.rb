class ContractsController < ApplicationController

  expose :contracts, -> { search(@active_company.contracts.includes_associated, sortable_fields) }
  expose :contract, id: ->{ params[:slug] }, scope: ->{ @active_company.contracts.includes_associated }, find_by: :slug

  # @route GET /contracts (contracts)
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

  # @route GET /contracts/:slug (contract)
  def show
    authorize contract
    render inertia: "Contracts/Show", props: {
      contract: contract.render(view: :show),
    }
  end

  # @route GET /contracts/new (new_contract)
  def new
    authorize Contract
    render inertia: "Contracts/New", props: {
      contract: Contract.new.render(view: :form_data),
    }
  end

  # @route GET /contracts/:slug/edit (edit_contract)
  def edit
    authorize contract
    render inertia: "Contracts/Edit", props: {
      contract: contract.render(view: :edit),
    }
  end

  # @route POST /contracts (contracts)
  def create
    authorize Contract
    contract.company = @active_company

    if contract.save
      redirect_to contract, notice: "Contract was successfully created"
    else
      redirect_to new_contract_path, inertia: { errors: contract.errors }
    end
  end

  # @route PATCH /contracts/:slug (contract)
  # @route PUT /contracts/:slug (contract)
  def update
    authorize contract
    if contract.update(contract_params)
      redirect_to contract, notice: "Contract was successfully updated"
    else
      redirect_to edit_contract_path, inertia: { errors: contract.errors }
    end
  end

  # @route DELETE /contracts (contracts)
  # @route DELETE /contracts/:slug (contract)
  def destroy
    authorize contract
    contract.destroy
    redirect_to contracts_url, notice: "Contract was successfully destroyed."
  end

  private

  def sortable_fields
    %w(name begins_at ends_at vendors.name categories.name).freeze
  end

  def contract_params
    params.expect(contract: [:name, :number, :begins_at, :ends_at, :notes, :category_id, :vendor_id])
  end
end
