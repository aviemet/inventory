class Networks::EditSerializer < ApplicationSerializer
  object_as :network

  attributes :name,
             :address,
             :vlan_id,
             :notes

  attribute :gateway do
    network.gateway.to_s
  end

  attribute :dhcp_start do
    network&.dhcp_start&.to_s
  end

  attribute :dhcp_end do
    network&.dhcp_end&.to_s
  end
end
