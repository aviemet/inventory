class TicketStatusBlueprint < ApplicationBlueprint
  fields :name,
         :created_at,
         :updated_at

  view :new do
    only :id, :name
  end
end