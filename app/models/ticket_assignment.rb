class TicketAssignment < ApplicationRecord
  belongs_to :person
  belongs_to :ticket
end
