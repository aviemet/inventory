class Networks::IndexSerializer < ApplicationSerializer
  object_as :network

  attributes(
    :id,
    :name,
    :address,
    :vlan_id,
    :notes,
    :created_at,
    :updated_at,
  )

  type :string
  def gateway
    network.gateway.to_s
  end

  type :string
  def dhcp_start
    network&.dhcp_start&.to_s
  end

  type :string
  def dhcp_end
    network&.dhcp_end&.to_s
  end

  type :string
  def broadcast
    network&.address&.broadcast&.to_s
  end
end
