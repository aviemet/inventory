class IpLeases::OptionsSerializer < ApplicationSerializer
  object_as :ip_lease

  attributes :address
end
