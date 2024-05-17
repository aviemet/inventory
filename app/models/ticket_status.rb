# == Schema Information
#
# Table name: ticket_statuses
#
#  id          :bigint           not null, primary key
#  name        :string
#  slug        :string           not null
#  status_type :integer          default("open")
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_ticket_statuses_on_slug  (slug) UNIQUE
#
class TicketStatus < ApplicationRecord
  slug :name

  tracked
  resourcify

  enum :status_type, %i(open pending closed)

  has_many :tickets, dependent: :nullify
end
