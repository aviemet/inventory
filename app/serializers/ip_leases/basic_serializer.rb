class IpLeases::BasicSerializer < IpLeaseSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  has_one :item, serializer: Items::OptionsSerializer
end
