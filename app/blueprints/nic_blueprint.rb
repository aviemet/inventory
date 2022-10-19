class NicBlueprint < ApplicationBlueprint
  fields :mac,
         :nic_type,
         :item_id,
         :created_at,
         :updated_at

  association :ips, blueprint: IpLeaseBlueprint
end
