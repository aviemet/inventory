class Consumables::SpotlightSerializer < ApplicationSerializer
  object_as :consumable

  attributes(
    :name,
    :qty,
    :type,
    :model_id,
    :vendor_id,
    :default_location_id,
    id: { type: :string },
  )

  belongs_to :model, serializer: Models::OptionsSerializer
  belongs_to :status_label, serializer: StatusLabels::BasicSerializer
end
