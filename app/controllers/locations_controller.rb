class LocationsController < ApplicationController
  include OwnableConcern

  include ContactableConcern

  expose :locations, -> { search(@active_company.locations.includes_associated, sortable_fields) }
  # location is used as a local variable by redirect_to
  expose :loc, model: Location, id: ->{ params[:slug] }, scope: ->{ @active_company.locations.includes_associated }, find_by: :slug

  # @route GET /locations (locations)
  def index
    authorize locations
    paginated_locations = locations.page(params[:page] || 1).per(current_user.limit(:locations))

    render inertia: "Locations/Index", props: {
      locations: paginated_locations.render(view: :index),
      pagination: -> { {
        count: locations.count,
        **pagination_data(paginated_locations)
      } }
    }
  end

  # @route GET /locations/:slug (location)
  def show
    authorize loc, policy_class: LocationPolicy
    render inertia: "Locations/Show", props: {
      location: loc.render(view: :show)
    }
  end

  # @route GET /locations/new (new_location)
  def new
    authorize Location
    render inertia: "Locations/New", props: {
      location: Location.new(currency: @active_company.default_currency).render(view: :form_data),
    }
  end

  # @route GET /locations/:slug/edit (edit_location)
  def edit
    authorize loc, policy_class: LocationPolicy
    render inertia: "Locations/Edit", props: {
      location: loc.render(view: :edit),
    }
  end

  # @route POST /locations (locations)
  def create
    authorize Location
    loc = Location.new(location_params)
    loc.company = @active_company

    if request.params&.[](:redirect) == false

      if loc.save
        render json: loc.render, status: :created
      else
        render json: { errors: loc.errors }, status: :see_other
      end

    elsif loc.save

      redirect_to loc, notice: 'Location was successfully created'
    else
      redirect_to new_location_path, inertia: { errors: loc.errors }

    end
  end

  # @route PATCH /locations/:slug (location)
  # @route PUT /locations/:slug (location)
  def update
    authorize loc, policy_class: LocationPolicy
    if loc.update(location_params)
      redirect_to loc, notice: 'Location was successfully updated'
    else
      redirect_to edit_location_path, inertia: { errors: loc.errors }
    end
  end

  # @route DELETE /locations (locations)
  # @route DELETE /locations/:slug (location)
  def destroy
    authorize loc, policy_class: LocationPolicy
    loc.destroy
    redirect_to locations_url, notice: 'Location was successfully destroyed.'
  end

  private

  def sortable_fields
    %w(name currency items accessories components consumables departments.name).freeze
  end

  # contact_attributes from Concern
  def location_params
    params.require(:location).permit(:name, :parent_id, :currency, :department_id)
  end
end
