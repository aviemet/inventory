class LicensesController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :licenses, -> { search(@active_company.licenses.includes_associated, sortable_fields) }
  expose :license

  # GET /licenses
  def index
    paginated_licenses = licenses.page(params[:page] || 1)

    render inertia: "Licenses/Index", props: {
      licenses: paginated_licenses.render(view: :index),
      pagination: -> { {
        count: licenses.count,
        **pagination_data(paginated_licenses)
      } }
    }
  end

  # GET /licenses/1
  def show
    render inertia: "Licenses/Show", props: {
      license: -> { license.render(view: :show) }
    }
  end

  # GET /licenses/new
  def new
    render inertia: "Licenses/New", props: {
      license: License.new.render(view: :new),
      categories: -> { @active_company.categories.find_by_type(:License).render(view: :as_options) },
      vendors: -> { @active_company.vendors.render(view: :as_options) },
      manufacturers: -> { @active_company.manufacturers.render(view: :as_options) },
    }
  end

  # GET /licenses/1/edit
  def edit
    render inertia: "Licenses/Edit", props: {
      license: license.render(view: :edit),
      categories: -> { @active_company.categories.find_by_type(:License).render(view: :as_options) },
      vendors: -> { @active_company.vendors.render(view: :as_options) },
      manufacturers: -> { @active_company.manufacturers.render(view: :as_options) },
    }
  end

  # GET /licenses/:id/checkout
  def checkout
    redirect_to license if license.qty == 0

    assignment = Assignment.new({ assignable: license })

    render inertia: "Licenses/Checkout", props: {
      license: license.render,
      assignment: assignment.render(view: :new),
      people: -> { @active_company.people.select([:id, :first_name, :last_name, :location_id]).render(view: :as_options) },
      items: -> { @active_company.items.select([:id, :name, :default_location_id]).render(view: :as_options) },
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
