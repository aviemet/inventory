class NicSerializer < ApplicationSerializer
  attributes :mac,
             :nic_type,
             :item_id,
             :created_at,
             :updated_at

  has_many :ips, serializer: IpLeaseSerializer
end
