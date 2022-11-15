class TicketMessage < ApplicationRecord
  belongs_to :ticket
  belongs_to :created_by, class_name: "Person"
end
