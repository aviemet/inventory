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
  
  audited

  belongs_to :manager, class_name: 'Person', optional: true
  has_one :user

  before_validation :ensure_associated_contact

  validates_presence_of :first_name
  validates_presence_of :last_name

  delegate :to_s, to: :full_name

  scope :includes_associated, -> { includes([:user, :manager, :department]) }

  def full_name
    "#{first_name} #{last_name}"
  end

  def self.to_s_field
    :first_name
  end

  private

  def ensure_associated_contact
    build_contact unless contact
  end
end
