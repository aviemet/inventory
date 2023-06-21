class LicensesController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :licenses, -> { search(@active_company.licenses.includes_associated, sortable_fields) }
  expose :license, scope: ->{ @active_company.licenses }, find: ->(id, scope){ scope.includes_associated.find(id) }

  # GET /licenses
  def index
    authorize licenses
    paginated_licenses = licenses.page(params[:page] || 1).per(current_user.limit(:licenses))

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
    authorize license
    render inertia: "Licenses/Show", props: {
      license: -> { license.render(view: :show) }
    }
  end

  # GET /licenses/new
  def new
    authorize License
    render inertia: "Licenses/New", props: {
      license: License.new.render(view: :form_data),
      categories: -> { @active_company.categories.find_by_type(:License).render(view: :options) },
      vendors: -> { @active_company.vendors.render(view: :options) },
      manufacturers: -> { @active_company.manufacturers.render(view: :options) },
    }
  end

  # GET /licenses/1/edit
  def edit
    authorize license
    render inertia: "Licenses/Edit", props: {
      license: license.render(view: :edit),
      categories: -> { @active_company.categories.find_by_type(:License).render(view: :options) },
      vendors: -> { @active_company.vendors.render(view: :options) },
      manufacturers: -> { @active_company.manufacturers.render(view: :options) },
    }
  end

  # GET /licenses/:id/checkout
  def checkout
    authorize license
    redirect_to license if license.qty == 0

    assignment = Assignment.new({ assignable: license })

    render inertia: "Licenses/Checkout", props: {
      license: license.render,
      assignment: assignment.render(view: :form_data),
      people: -> { @active_company.people.select([:id, :first_name, :last_name, :location_id]).render(view: :options) },
      items: -> { @active_company.items.select([:id, :name, :default_location_id]).render(view: :options) },
    }
  end

  # GET /licenses/:id/checkin/:assignment_id
  def checkin
    authorize license
    assignment = Assignment.find(params[:assignment_id])

    if assignment&.assignable == license && assignment.active
      assignment.returned_at = Time.current
      assignment.active = false

      render inertia: "Licenses/Checkin", props: {
        license: license.render(view: :edit),
        assignment: assignment.render(view: :edit),
      }
    else
      redirect_to license, warning: 'License assignment is unable to be checked in'
    end
  end

  # POST /licenses
  def create
    authorize License
    license.company = @active_company

    if license.save
      redirect_to license, notice: 'License was successfully created'
    else
      redirect_to new_license_path, inertia: { errors: license.errors }
    end
  end

  # PATCH/PUT /licenses/1
  def update
    authorize license
    if license.update(license_params)
      redirect_to license, notice: 'License was successfully updated'
    else
      redirect_to edit_license_path, inertia: { errors: license.errors }
    end
  end

  # DELETE /licenses/1
  def destroy
    authorize license
    license.destroy
    redirect_to licenses_url, notice: 'License was successfully destroyed.'
  end

  private

  def sortable_fields
    %w(name key licenser_name licenser_email notes models.name vendors.name categories.name manufacturers.name departments.name).freeze
  end

  def license_params
    params.require(:license).permit(:name, :description, :qty, :cost, :category_id, :vendor_id, :manufacturer_id, :key)
  end
end
