class DepartmentBlueprint < Blueprinter::Base
  identifier :id

  fields :id,
         :name,
         :slug,
         :location_id,
         :created_at,
         :updated_at,
         :manager_id
end