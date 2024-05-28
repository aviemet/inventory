class Components::SpotlightSerializer < ApplicationSerializer
  object_as :component

  attributes(
    :name,
    :asset_tag,
    :qty,
    :type,
    :model_id,
    :vendor_id,
    :default_location_id,
    :status_label_id,
    id: { type: :string },
  )

  belongs_to :model, serializer: Models::OptionsSerializer
  belongs_to :status_label, serializer: StatusLabels::BasicSerializer
end
