class NetworkBlueprint < ApplicationBlueprint
  fields :name,
         :address,
         :vlan_id,
         :notes,
         :created_at,
         :updated_at

  field :gateway do |network|
    network.gateway.to_s
  end

  field :broadcast do |network|
    network&.address&.broadcast&.to_s
  end

  field :dhcp_start do |network|
    network&.dhcp_start&.to_s
  end

  field :dhcp_end do |network|
    network&.dhcp_end&.to_s
  end

  view :details do
    field :hosts do |network, options|
      network&.address&.paginate_hosts(page: options[:page])&.map(&:to_s)
    end
  end
end
