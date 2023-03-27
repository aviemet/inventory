class TicketAssignment < ApplicationRecord
  tracked
  resourcify

  belongs_to :person
  belongs_to :ticket
end
