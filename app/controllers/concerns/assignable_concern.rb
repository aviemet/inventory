module AssignableConcern
  def checkout
    assignable = params[:asset_type].camelize.constantize.find(params[:id])

    if assignable.assigned?
      redirect_to assignable, warning: "Asset is already assigned, must be checked back in before it can be assigned again."
    else
      props = {
        assignment: AssignmentBlueprint.render_as_json(Assignment.new({
          assignable_id: params[:id],
          assignable_type: params[:asset_type],
          assign_toable_type: "Person", # Default type in form is Person
        }), view: :new),
        people: PersonBlueprint.render_as_json(@active_company.people, view: :as_options),
        items: ItemBlueprint.render_as_json(@active_company.items, view: :as_options),
        locations: LocationBlueprint.render_as_json(@active_company.locations, view: :as_options)
      }
      props[model_name] = self.send(model_name)
      render inertia: "#{params[:asset_type].pluralize}/Checkout", props: props
    end
  end

  def checkin
    props = {
      assignment: -> { @assignable.assignment }
    }
    render inertia: "#{params[:asset_type].pluralize}/Checkin", props: props
  end

  private

  def model_name
    params[:controller].singularize
  end
end