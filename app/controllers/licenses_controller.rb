class LicensesController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :licenses, -> { @active_company.licenses.includes_associated }
  expose :license

  # GET /licenses
  # GET /licenses.json
  def index
    self.licenses = search(licenses, sortable_fields)
    paginated_licenses = licenses.page(params[:page] || 1)

    render inertia: "Licenses/Index", props: {
      licenses: LicenseBlueprint.render_as_json(licenses, view: :associations),
      pagination: -> { {
        count: licenses.count,
        **pagination_data(paginated_licenses)
      } }
    }
  end

  # GET /licenses/1
  # GET /licenses/1.json
  def show
    render inertia: "Licenses/Show"
  end

  # GET /licenses/new
  def new
    render inertia: "Licenses/New"
  end

  # GET /licenses/1/edit
  def edit
    render inertia: "Licenses/Edit"
  end

  # POST /licenses
  # POST /licenses.json
  def create
    license.company = Company.find(company_params[:id])
    respond_to do |format|
      if license.save
        format.html { redirect_to license, notice: 'License was successfully created.' }
        format.json { render :show, status: :created, location: license }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: license.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /licenses/1
  # PATCH/PUT /licenses/1.json
  def update
    respond_to do |format|
      if license.update(license_params)
        format.html { redirect_to license, notice: 'License was successfully updated.' }
        format.json { render :show, status: :ok, location: license }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: license.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /licenses/1
  # DELETE /licenses/1.json
  def destroy
    license.destroy
    respond_to do |format|
      format.html { redirect_to licenses_url, notice: 'License was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def sortable_fields
    %w(name key licenser_name licenser_email notes models.name vendors.name categories.name manufacturers.name departments.name).freeze
  end

  def license_params
    params.require(:license).permit(:name, :description, :seats, :key)
  end
end
