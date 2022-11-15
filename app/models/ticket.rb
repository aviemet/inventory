class Ticket < ApplicationRecord
  include PgSearch::Model

  pg_search_scope(
    :search,
    against: [:subject], associated_against: {
      created_by: [:email]
    }, using: {
      tsearch: { prefix: true },
      trigram: {}
    }
  )

  enum :priority, %i(urgent high standard low)

  belongs_to :created_by, class_name: "Person", required: false
  belongs_to :status, class_name: "TicketStatus", required: true
  belongs_to :primary_contact, class_name: "Person", required: false
  has_many :assignments, class_name: "TicketAssignment"
  has_many :assignees, through: :assignments, source: :person
  has_many :messages, class_name: "TicketMessage"

  validates_presence_of :subject, message: "Subject can't be blank"

  attribute :status_id, default: 1
end
