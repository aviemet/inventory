json.extract! network, :id, :name, :ip, :gateway, :dhcp_start, :dhcp_end, :vlan_id, :created_at, :updated_at
json.url network_url(network, format: :json)
