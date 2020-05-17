json.extract! network, :id, :name, :ipv4, :v4_mask, :v4_gateway, :v4_dhcp_start, :v4_dhcp_end, :vland_id, :created_at, :updated_at
json.url network_url(network, format: :json)
