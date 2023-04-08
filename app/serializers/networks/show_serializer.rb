class Networks::ShowSerializer < ApplicationSerializer
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

  type :string
  def broadcast
    network.address&.broadcast&.to_s
  end

  attribute :dhcp_start do
    network.dhcp_start&.to_s
  end

  attribute :dhcp_end do
    network.dhcp_end&.to_s
  end

  type "string[]"
  def hosts
    network.address&.paginate_hosts(page: options[:page])&.map(&:to_s)
  end

  type :number
  def page
    options[:page] || 1
  end
end
