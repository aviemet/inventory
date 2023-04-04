class StatusLabelSerializer < ApplicationSerializer
  identifier :slug

  attributes :id,
             :name,
             :status_type,
             :description,
             :created_at,
             :updated_at
end
