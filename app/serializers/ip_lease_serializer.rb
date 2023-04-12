class IpLeaseSerializer < ApplicationSerializer
  object_as :ip_lease

  attributes(
    :id,
    :active,
    :created_at,
    :updated_at,
  )

  attribute :address do
    ip_lease.address.to_s
  end
end
