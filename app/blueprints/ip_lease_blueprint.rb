class IpLeaseBlueprint < ApplicationBlueprint
  fields :active,
         :created_at,
         :updated_at

  field :address do |ip|
    ip.address.to_s
  end

  view :with_item do
    association :item, blueprint: ItemBlueprint, view: :shallow
  end

  view :options do
    only :id, :address
  end

end
