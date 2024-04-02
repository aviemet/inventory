class LicensesController < ApplicationController
  include OwnableConcern
  include Searchable

  expose :licenses, -> { search(@active_company.licenses.includes_associated, sortable_fields) }
  expose :license, scope: ->{ @active_company.licenses }, find: ->(id, scope){ scope.includes_associated.find(id) }

  # @route GET /licenses (licenses)
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

  # @route GET /licenses/:id (license)
  def show
    authorize license
    render inertia: "Licenses/Show", props: {
      license: -> { license.render(view: :show) }
    }
  end

  # @route GET /licenses/new (new_license)
  def new
    authorize License
    render inertia: "Licenses/New", props: {
      license: License.new.render(view: :form_data),
    }
  end

  # @route GET /licenses/:id/edit (edit_license)
  def edit
    authorize license
    render inertia: "Licenses/Edit", props: {
      license: license.render(view: :edit),
    }
  end

  # @route GET /licenses/:id/checkout (checkout_license)
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

  # @route GET /licenses/:id/checkin/:assignment_id (checkin_license)
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

  # @route POST /licenses (licenses)
  def create
    authorize License
    license.company = @active_company

    if license.save
      redirect_to license, notice: 'License was successfully created'
    else
      redirect_to new_license_path, inertia: { errors: license.errors }
    end
  end

  # @route PATCH /licenses/:id (license)
  # @route PUT /licenses/:id (license)
  def update
    authorize license
    if license.update(license_params)
      redirect_to license, notice: 'License was successfully updated'
    else
      redirect_to edit_license_path, inertia: { errors: license.errors }
    end
  end

  # @route DELETE /licenses (licenses)
  # @route DELETE /licenses/:id (license)
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
