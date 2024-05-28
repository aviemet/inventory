class Networks::SpotlightSerializer < ApplicationSerializer
  object_as :network

  attributes(
    :name,
    :address,
    :vlan_id,
    :notes,
    id: { type: :string },
  )
end
