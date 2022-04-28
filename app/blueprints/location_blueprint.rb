class LocationBlueprint < ApplicationBlueprint
  fields :name

  view :as_options do
    fields :id, :name
  end
end
