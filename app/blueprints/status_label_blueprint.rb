class StatusLabelBlueprint < ApplicationBlueprint
  identifier :slug

  fields :id,
         :name,
         :status_type,
         :description,
         :created_at,
         :updated_at
end
