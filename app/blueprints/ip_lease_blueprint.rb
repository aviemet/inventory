class IpLeaseBlueprint < Blueprinter::Base
  identifier :id

  fields :active,
         :created_at,
         :updated_at

  field :address do |ip|
    ip.address.to_s
  end

  association :item, blueprint: ItemBlueprint, options: { view: :shallow }
end
