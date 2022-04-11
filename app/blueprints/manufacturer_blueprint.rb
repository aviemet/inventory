class ManufacturerBlueprint < Blueprinter::Base
  identifier :id

  fields :id,
         :name,
         :slug,
         :created_at,
         :updated_at
end
