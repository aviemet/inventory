# == Schema Information
#
# Table name: networks
#
#  id         :bigint           not null, primary key
#  address    :cidr
#  dhcp_end   :inet
#  dhcp_start :inet
#  gateway    :inet
#  name       :string
#  notes      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  vlan_id    :integer
#
class NetworkSerializer < ApplicationSerializer
  object_as :network

  attributes(
    :name,
    :address,
    :vlan_id,
    :notes,
    :created_at,
    :updated_at,
  )

  attribute :gateway do
    network.gateway.to_s
  end

  attribute :broadcast do
    network&.address&.broadcast&.to_s
  end

  attribute :dhcp_start do
    network&.dhcp_start&.to_s
  end

  attribute :dhcp_end do
    network&.dhcp_end&.to_s
  end
end
