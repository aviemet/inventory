class ContractsController < ApplicationController
  include Searchable

  expose :contracts, -> { @active_company.contracts.includes_associated }
  expose :contract
  expose :vendors, -> { @active_company.vendors }

  # GET /contracts
  # GET /contracts.json
  def index
    self.contracts = search(contracts, sortable_fields)
    paginated_contracts = contracts.page(params[:page] || 1)

    render inertia: "Contracts/Index", props: {
      contracts: ContractBlueprint.render_as_json(paginated_contracts, view: :associations),
      pagination: -> { {
        count: contracts.count,
        **pagination_data(paginated_contracts)
      } }
    }
  end

  # GET /contracts/1
  # GET /contracts/1.json
  def show
    render inertia: "Contracts/Show"
  end

  # GET /contracts/new
  def new
    render inertia: "Contracts/New"
  end

  # GET /contracts/1/edit
  def edit
    render inertia: "Contracts/Edit"
  end

  # POST /contracts
  # POST /contracts.json
  def create
    respond_to do |format|
      if contract.save
        format.html { redirect_to contract, notice: 'Contract was successfully created.' }
        format.json { render :show, status: :created, location: contract }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: contract.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /contracts/1
  # PATCH/PUT /contracts/1.json
  def update
    respond_to do |format|
      if contract.update(contract_params)
        format.html { redirect_to contract, notice: 'Contract was successfully updated.' }
        format.json { render :show, status: :ok, location: contract }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: contract.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /contracts/1
  # DELETE /contracts/1.json
  def destroy
    contract.destroy
    respond_to do |format|
      format.html { redirect_to contracts_url, notice: 'Contract was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def sortable_fields
    %w(name begins_at ends_at vendors.name categories.name).freeze
  end

  def contract_params
    params.require(:contract).permit(:name, :number, :begins_at, :ends_at, :notes, :category_id, :vendor_id)
  end
end
