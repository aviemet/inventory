class TicketStatus < ApplicationRecord
  slug :name

  tracked
  resourcify

  enum :status_type, %i(open pending closed)

  has_many :tickets, dependent: :nullify
end
