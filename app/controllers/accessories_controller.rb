class AccessoriesController < ApplicationController
  include OwnableConcern

  expose :accessories, -> { search(@active_company.accessories.includes_associated, sortable_fields) }
  expose :accessory, scope: ->{ @active_company.accessories }, find: ->(id, scope){ scope.includes_associated.find(id) }

  strong_params :accessory, permit: [:name, :serial, :asset_tag, :notes, :qty, :model_id, :vendor_id, :default_location_id, :category_id, :model_number, :cost, :cost_currency, :min_qty, :status_id]

  # @route GET /accessories (accessories)
  def index
    authorize accessories
    paginated_accessories = accessories.page(params[:page] || 1).per(current_user.limit(:accessories))

    render inertia: "Accessories/Index", props: {
      accessories: -> { paginated_accessories.render(view: :index) },
      pagination: -> { {
        count: accessories.count,
        **pagination_data(paginated_accessories)
      } }
    }
  end

  # @route GET /accessories/:id (accessory)
  def show
    authorize accessory
    render inertia: "Accessories/Show", props: {
      accessory: -> { accessory.render(view: :show) }
    }
  end

  # @route GET /accessories/new (new_accessory)
  def new
    authorize Accessory
    render inertia: "Accessories/New", props: {
      accessory: Accessory.new.render(view: :form_data),
    }
  end

  # @route GET /accessories/:id/edit (edit_accessory)
  def edit
    authorize accessory
    render inertia: "Accessories/Edit", props: {
      accessory: accessory.render(view: :edit),
    }
  end

  # @route GET /accessories/:id/checkout (checkout_accessory)
  def checkout
    authorize accessory
    if accessory.qty == 0
      redirect_to accessory, warning: "There are none available to checkout"
    else
      assignment = Assignment.new
      assignment.assignable = accessory
      assignment.assign_toable_type = :Item

      render inertia: "Accessories/Checkout", props: {
        accessory: accessory.render(view: :edit),
        assignment: assignment.render(view: :form_data),
        people: -> { @active_company.people.select([:id, :first_name, :last_name, :location_id]).render(view: :options) },
        items: -> { @active_company.items.select([:id, :name, :default_location_id]).render(view: :options) },
        locations: -> { @active_company.locations.select([:id, :slug, :name]).render(view: :options) },
      }
    end
  end

  # @route GET /accessories/:id/checkin/:assignment_id (checkin_accessory)
  def checkin
    authorize accessory
    assignment = Assignment.find(params[:assignment_id])

    if assignment&.assignable == accessory && assignment.active
      assignment.returned_at = Time.current
      assignment.active = false

      render inertia: "Accessories/Checkin", props: {
        accessory: accessory.render(view: :edit),
        assignment: assignment.render(view: :edit),
        statuses: -> { StatusLabel.all.render }
      }
    else
      redirect_to accessory, warning: "Accessory assignment is unable to be checked in"
    end
  end

  # @route POST /accessories (accessories)
  def create
    authorize Accessory
    accessory.company = @active_company
    if accessory.save
      redirect_to accessory, notice: "Accessory was successfully created"
    else
      redirect_to new_accessory_path, inertia: { errors: accessory.errors }
    end
  end

  # @route PATCH /accessories/:id (accessory)
  # @route PUT /accessories/:id (accessory)
  def update
    authorize accessory
    if accessory.update(accessory_params)
      redirect_to accessory, notice: "Accessory was successfully updated"
    else
      redirect_to edit_accessory_path, inertia: { errors: accessory.errors }
    end
  end

  # @route DELETE /accessories (accessories)
  # @route DELETE /accessories/:id (accessory)
  def destroy
    authorize accessory
    accessory.destroy
    redirect_to accessories_url, notice: "Accessory was successfully destroyed."
  end

  private

  def sortable_fields
    %w(name serial model_number cost purchased_at requestable models.name vendors.name categories.name manufacturers.name departments.name).freeze
  end

end
