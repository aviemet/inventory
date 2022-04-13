class NetworkBlueprint < Blueprinter::Base
  identifier :id

  fields :name,
         :address,
         :vlan_id,
         :created_at,
         :updated_at

  field :gateway do |network|
    network.gateway.to_s
  end

  field :broadcast do |network|
    network.address.broadcast.to_s
  end

  field :dhcp_start do |network|
    network.dhcp_start.to_s
  end

  field :dhcp_end do |network|
    network.dhcp_end.to_s
  end

  view :details do
    field :hosts do |network|
      network.address.hosts.map(&:to_s)
    end
  end
end
