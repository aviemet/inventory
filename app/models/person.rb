class Person < ApplicationRecord
  include Ownable
  include Contactable
  include AssignToable
  include Fieldable
  include PgSearch::Model
  include Documentable

  multisearchable(
    against: [:first_name, :middle_name, :last_name, :employee_number],
    additional_attributes: ->(record) { { label: record.full_name } },
  )

  pg_search_scope(
    :search,
    against: [:first_name, :middle_name, :last_name, :employee_number, :job_title], associated_against: {
      manager: [:first_name, :middle_name, :last_name, :employee_number, :job_title],
      user: [:email]
    }, using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  tracked
  resourcify
  rolify

  belongs_to :user, optional: true
  belongs_to :manager, class_name: 'Person', optional: true
  belongs_to :location, optional: true

  has_many :ticket_assignments, dependent: :nullify
  has_many :tickets, through: :ticket_assignments, inverse_of: :assignees

  has_many :person_group_assignments
  has_many :groups, through: :person_group_assignments, source: :person_group

  validates_presence_of :first_name
  validates_presence_of :last_name

  accepts_nested_attributes_for :user
  accepts_nested_attributes_for :contact
  accepts_nested_attributes_for :owner

  delegate :to_s, to: :full_name

  scope :includes_associated, -> { includes([:user, :manager, :department, :documentations]) }

  def full_name
    "#{first_name} #{last_name}"
  end
  alias :name :full_name

  def default_location
    self&.location || self&.department&.location
  end

end
