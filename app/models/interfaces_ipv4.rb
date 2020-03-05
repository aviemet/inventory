class InterfacesIpv4 < ApplicationRecord
  belongs_to :interface
  belongs_to :ipv4_address
end
