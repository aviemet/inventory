class Networks::IndexSerializer < ApplicationSerializer
  object_as :network

  attributes :name,
             :address,
             :vlan_id,
             :notes,
             :created_at,
             :updated_at

  attribute :gateway do |network|
    network.gateway.to_s
  end

  attribute :broadcast do |network|
    network&.address&.broadcast&.to_s
  end

  attribute :dhcp_start do |network|
    network&.dhcp_start&.to_s
  end

  attribute :dhcp_end do |network|
    network&.dhcp_end&.to_s
  end
end
