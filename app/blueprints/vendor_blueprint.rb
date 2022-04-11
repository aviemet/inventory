class VendorBlueprint < Blueprinter::Base
  identifier :id

  fields :id,
         :name,
         :slug,
         :url,
         :created_at,
         :updated_at
end
