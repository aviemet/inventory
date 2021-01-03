json.extract! ip_lease, :id, :nic_id, :address, :active, :created_at, :updated_at
json.url ip_lease_url(ip_lease, format: :json)
