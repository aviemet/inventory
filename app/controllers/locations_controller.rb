class LocationsController < ApplicationController
  include OwnableConcern
  include Searchable
  include ContactableConcern

  expose :locations, -> { search(@active_company.locations.includes_associated, sortable_fields) }
  # location is used as a local variable by redirect_to
  expose :loc, model: Location, id: ->{ params[:slug] }, scope: ->{ @active_company.locations.includes_associated }, find_by: :slug

  # GET /locations
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

  # GET /locations/:slug
  def show
    authorize loc, policy_class: LocationPolicy
    render inertia: "Locations/Show", props: {
      location: loc.render(view: :show)
    }
  end

  # GET /locations/new
  def new
    authorize Location
    render inertia: "Locations/New", props: {
      location: Location.new(currency: @active_company.default_currency).render(view: :form_data),
    }
  end

  # GET /locations/:slug/edit
  def edit
    authorize loc, policy_class: LocationPolicy
    render inertia: "Locations/Edit", props: {
      location: loc.render(view: :edit),
    }
  end

  # POST /locations
  def create
    authorize Location
    loc = Location.new(location_params)
    loc.company = @active_company

    if request.params&.[](:redirect) == false

      if loc.save
        render json: loc.render, status: 201
      else
        render json: { errors: loc.errors }, status: 303
      end

    elsif loc.save

      redirect_to loc, notice: 'Location was successfully created'
    else
      redirect_to new_location_path, inertia: { errors: loc.errors }

    end
  end

  # PATCH/PUT /locations/:slug
  def update
    authorize loc, policy_class: LocationPolicy
    if loc.update(location_params)
      redirect_to loc, notice: 'Location was successfully updated'
    else
      redirect_to edit_location_path, inertia: { errors: loc.errors }
    end
  end

  # DELETE /locations/:slug
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
