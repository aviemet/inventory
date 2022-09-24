class IpLeaseBlueprint < ApplicationBlueprint
  fields :active,
         :created_at,
         :updated_at

  field :address do |ip|
    ip.address.to_s
  end

  association :item, blueprint: ItemBlueprint, view: :shallow

  view :shallow do
    exclude :item
  end
end
