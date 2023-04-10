class Networks::FormDataSerializer < ApplicationSerializer
  object_as :network

  attributes(
    :name,
    :address,
    :vlan_id,
    :notes,
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
end
