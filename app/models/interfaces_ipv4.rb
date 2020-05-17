class InterfacesIpv4 < ApplicationRecord
  belongs_to :network_interface
  belongs_to :ipv4_address
end
