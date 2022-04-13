class IpLeaseBlueprint < Blueprinter::Base
  identifier :id

  fields :address,
         :active,
         :created_at,
         :updated_at
end
