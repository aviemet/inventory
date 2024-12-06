# == Schema Information
#
# Table name: tickets
#
#  id                 :bigint           not null, primary key
#  description        :text
#  number             :integer          not null
#  priority           :integer
#  subject            :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  asset_id           :bigint
#  created_by_id      :bigint
#  primary_contact_id :bigint
#  status_id          :bigint
#
# Indexes
#
#  index_tickets_on_asset_id            (asset_id)
#  index_tickets_on_created_by_id       (created_by_id)
#  index_tickets_on_number              (number) UNIQUE
#  index_tickets_on_primary_contact_id  (primary_contact_id)
#  index_tickets_on_status_id           (status_id)
#
# Foreign Keys
#
#  fk_rails_...  (asset_id => assets.id)
#  fk_rails_...  (created_by_id => people.id)
#  fk_rails_...  (primary_contact_id => people.id)
#  fk_rails_...  (status_id => ticket_statuses.id)
#
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

  enum :priority, { urgent: 0, high: 1, standard: 2, low: 3 }

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
