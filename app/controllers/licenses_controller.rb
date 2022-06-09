class LicensesController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :licenses, -> { @active_company.licenses.includes_associated }
  expose :license

  # GET /licenses
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
  def show
    render inertia: "Licenses/Show", props: {
      license: -> { LicenseBlueprint.render_as_json(license, view: :associations) }
    }
  end

  # GET /licenses/new
  def new
    render inertia: "Licenses/New", props: {
      license: LicenseBlueprint.render_as_json(License.new, view: :new),
      categories: -> { @active_company.categories.find_by_type(:License).as_json },
      vendors: -> { @active_company.vendors.as_json },
      manufacturers: -> { @active_company.manufacturers.as_json },
    }
  end

  # GET /licenses/1/edit
  def edit
    render inertia: "Licenses/Edit", props: {
      license: LicenseBlueprint.render_as_json(license),
      categories: -> { @active_company.categories.find_by_type(:License).as_json },
      vendors: -> { @active_company.vendors.as_json },
      manufacturers: -> { @active_company.manufacturers.as_json },
    }
  end

  # POST /licenses
  def create
    license.company = @active_company
    if license.save
      redirect_to license, notice: 'License was successfully created'
    else
      redirect_to new_license_path, inertia: { errors: license.errors }
    end
  end

  # PATCH/PUT /licenses/1
  def update
    if license.update(license_params)
      redirect_to license, notice: 'License was successfully updated'
    else
      redirect_to edit_license_path, inertia: { errors: license.errors }
    end
  end

  # DELETE /licenses/1
  def destroy
    license.destroy
    redirect_to licenses_url, notice: 'License was successfully destroyed.'
  end

  private

  def sortable_fields
    %w(name key licenser_name licenser_email notes models.name vendors.name categories.name manufacturers.name departments.name).freeze
  end

  def license_params
    params.require(:license).permit(:name, :description, :seats, :key)
  end
end
