class IpLeases::ShowSerializer < IpLeaseSerializer
  attributes(
    :id,
    :created_at,
    :updated_at,
  )

  has_one :item, serializer: Items::OptionsSerializer

  belongs_to :nic, serializer: Nics::OptionsSerializer
end
