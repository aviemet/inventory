class IpLeases::OptionsSerializer < ApplicationSerializer
  object_as :ip_lease

  attributes(
    :id,
  )

  attribute :address do
    ip_lease.address.to_s
  end
end
