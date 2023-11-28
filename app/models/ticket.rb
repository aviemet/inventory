class Ticket < ApplicationRecord
  include Ownable

  multisearchable(
    against: [:number, :subject],
    additional_attributes: ->(record) { { label: record.subject } },
  )

  pg_search_scope(
    :search,
    against: [:number, :subject], associated_against: {
      created_by: [:email]
    }, using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  tracked
  resourcify

  enum :priority, %i(urgent high standard low)

  belongs_to :created_by, class_name: "Person", optional: true
  belongs_to :status, class_name: "TicketStatus", optional: false
  belongs_to :primary_contact, class_name: "Person", optional: true
  belongs_to :asset, optional: true
  has_many :assignments, class_name: "TicketAssignment", dependent: :destroy
  has_many :assignees, through: :assignments, source: :person
  has_many :messages, class_name: "TicketMessage", dependent: :destroy

  validates :subject, presence: { message: "Subject can't be blank" }

  attribute :status_id, default: 1

  scope :includes_associated, -> { includes([:status, :created_by, :asset, assignments: :person]) }

  accepts_nested_attributes_for :assignments
end
