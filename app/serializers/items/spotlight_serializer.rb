class Items::SpotlightSerializer < ApplicationSerializer
  object_as :item

  attributes(
    :name,
    :asset_tag,
    :type,
    :model_id,
    :vendor_id,
    :default_location_id,
    :status_label_id,
    id: { type: :string },
  )

  type :boolean
  def assigned
    item.assigned?
  end

  belongs_to :model, serializer: Models::OptionsSerializer
  belongs_to :status_label, serializer: StatusLabels::BasicSerializer
end
