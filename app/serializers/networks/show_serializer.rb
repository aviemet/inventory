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

  attribute :broadcast do
    network&.address&.broadcast&.to_s
  end

  attribute :dhcp_start do
    network&.dhcp_start&.to_s
  end

  attribute :dhcp_end do
    network&.dhcp_end&.to_s
  end

  attribute :hosts do
    network&.address&.paginate_hosts(page: options[:page])&.map(&:to_s)
  end

  attribute :page do
    options[:page] || 1
  end
end
