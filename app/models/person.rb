class Person < ApplicationRecord
  include Ownable
  include Contactable
  include AssignToable
  include Fieldable
  include PgSearch::Model

  pg_search_scope(
    :search, 
    against: [:first_name, :middle_name, :last_name, :employee_number, :job_title], associated_against: {
      manager: [:first_name, :middle_name, :last_name, :employee_number, :job_title],
      user: [:email]
    }, using: {
      tsearch: { prefix: true }, 
      trigram: {}
    }
  )
  
  tracked

  belongs_to :manager, class_name: 'Person', optional: true
  belongs_to :location, optional: true
  has_one :user
  has_many :ticket_assignments
  has_many :tickets, through: :ticket_assignments, inverse_of: :assignees

  validates_presence_of :first_name
  validates_presence_of :last_name

  delegate :to_s, to: :full_name

  scope :includes_associated, -> { includes([:user, :manager, :department]) }

  def full_name
    "#{first_name} #{last_name}"
  end
  alias :name :full_name

  def self.to_s_field
    :first_name
  end

  def default_location
    self&.location || self&.department&.location
  end

end
