class Licenses::SpotlightSerializer < ApplicationSerializer
  object_as :license

  attributes(
    :name,
    :category_id,
    :vendor_id,
    :manufacturer_id,
    :status_label_id,
    id: { type: :string },
  )

  belongs_to :manufacturer, serializer: Manufacturers::OptionsSerializer
  belongs_to :status_label, serializer: StatusLabels::BasicSerializer
end
