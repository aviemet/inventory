module AssignableConcern
  def checkout
    props = {
      assignment: AssignmentBlueprint.render_as_json(Assignment.new({
        assignable_id: params[:id],
        assignable_type: params[:asset_type],
        assign_toable_type: "Person",
      }), view: :new),
      people: PersonBlueprint.render_as_json(@active_company.people),
      items: ItemBlueprint.render_as_json(@active_company.items),
      locations: LocationBlueprint.render_as_json(@active_company.locations)
    }
    props[model_name] = self.send(model_name)
    render inertia: "#{params[:asset_type].pluralize}/Checkout", props: props
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