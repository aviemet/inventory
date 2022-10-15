class ContractsController < ApplicationController
  include Searchable

  expose :contracts, -> { search(@active_company.contracts.includes_associated, sortable_fields) }
  expose :contract

  # GET /contracts
  def index
    paginated_contracts = contracts.page(params[:page] || 1)

    render inertia: "Contracts/Index", props: {
      contracts: paginated_contracts.render(view: :index),
      pagination: -> { {
        count: contracts.count,
        **pagination_data(paginated_contracts)
      } }
    }
  end

  # GET /contracts/1
  def show
    render inertia: "Contracts/Show", props: {
      contract: contract.render(view: :show),
    }
  end

  # GET /contracts/new
  def new
    render inertia: "Contracts/New", props: {
      contract: Contract.new.render(view: :new),
      vendors: -> { @active_company.vendors.render },
      categories: -> { @active_company.categories.find_by_type(:Contract).render },
    }
  end

  # GET /contracts/1/edit
  def edit
    render inertia: "Contracts/Edit", props: {
      contract: contract.render(view: :edit),
      vendors: -> { @active_company.vendors.render(view: :as_options) },
      categories: -> { @active_company.categories.find_by_type(:Contract).render(view: :as_options) },
    }
  end

  # POST /contracts
  def create
    contract.company = @active_company

    if contract.save
      redirect_to contract, notice: 'Contract was successfully created'
    else
      redirect_to new_contract_path, inertia: { errors: contract.errors }
    end
  end

  # PATCH/PUT /contracts/1
  def update
    if contract.update(contract_params)
      redirect_to contract, notice: 'Contract was successfully updated'
    else
      redirect_to edit_contract_path, inertia: { errors: contract.errors }
    end
  end

  # DELETE /contracts/1
  def destroy
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
