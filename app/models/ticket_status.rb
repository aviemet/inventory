class TicketStatus < ApplicationRecord
  slug :name

  tracked

  enum :status_type, %i(open pending closed)

  has_many :tickets
end
