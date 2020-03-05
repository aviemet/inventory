module Types
  class NetworkType < Types::BaseObject
    global_id_field :id
    field :name, String, null: true
    field :ipv4, String, null: true
    field :v4_mask, String, null: true
    field :v4_gateway, String, null: true
    field :v4_dhcp_start, String, null: true
    field :v4_dhcp_end, String, null: true
    field :vlan_id, String, null: true
  end
end
