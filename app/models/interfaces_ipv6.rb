class InterfacesIpv6 < ApplicationRecord
  belongs_to :network_interface
  belongs_to :ipv6_address
end
