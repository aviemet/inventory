class TicketMessage < ApplicationRecord
  belongs_to :ticket
  belongs_to :created_by, class_name: "Person"
  belongs_to :parent, class_name: "TicketMessage"
end
