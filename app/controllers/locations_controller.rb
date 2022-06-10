class LocationsController < ApplicationController
  include OwnableConcern
  include Searchable
  include ContactableConcern

  expose :locations, -> { @active_company.locations.includes_associated }
  expose :location, find_by: :slug, id: :slug

  # GET /locations
  def index
    self.locations = search(locations, sortable_fields)
    paginated_locations = locations.page(params[:page] || 1)

    render inertia: "Locations/Index", props: {
      locations: LocationBlueprint.render_as_json(paginated_locations, view: :counts),
      pagination: -> { {
        count: locations.count,
        **pagination_data(paginated_locations)
      } }
    }
  end

  # GET /locations/:slug
  def show
    render inertia: "Locations/Show", props: {
      location: LocationBlueprint.render_as_json(location, view: :associations)
    }
  end

  # GET /locations/new
  def new
    render inertia: "Locations/New", props: {
      location: LocationBlueprint.render_as_json(Location.new, view: :new),
      locations: -> { @active_company.locations.as_json },
      departments: -> { @active_company.departments.as_json },
      currencies: currencies,
    }
  end

  # GET /locations/:slug/edit
  def edit
    render inertia: "Locations/Edit", props: {
      location: LocationBlueprint.render_as_json(location),
      locations: -> { @active_company.locations.where.not(id: location.id) },
      departments: -> { @active_company.departments.as_json },
      currencies: currencies,
    }
  end

  # POST /locations
  def create
    location.company = @active_company
    if location.save
      redirect_to location, notice: 'Location was successfully created'
    else
      redirect_to new_location_path, inertia: { errors: location.errors }
    end
  end

  # PATCH/PUT /locations/:slug
  def update
    if location.update(location_params)
      redirect_to location, notice: 'Location was successfully updated'
    else
      redirect_to edit_location_path, inertia: { errors: location.errors }
    end
  end

  # DELETE /locations/:slug
  def destroy
    location.destroy
    redirect_to locations_url, notice: 'Location was successfully destroyed.'
  end

  private

  def currencies
    Monetize::Parser::CURRENCY_SYMBOLS.map{ |sym, abbr| { symbol: sym, code: abbr } }
  end

  def sortable_fields
    %w(name currency items accessories components consumables departments.name).freeze
  end

  # contact_attributes from Concern
  def location_params
    params.require(:location).permit(:name, :parent_id, :currency, :department_id)
  end
end
