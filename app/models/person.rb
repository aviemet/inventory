class Person < ApplicationRecord
  include Ownable
  include Contactable
  include AssignToable
  include Fieldable
  
  audited

  belongs_to :manager, class_name: 'Person', optional: true
  has_one :user

  before_validation :ensure_associated_contact

  validates_presence_of :first_name
  validates_presence_of :last_name

  delegate :to_s, to: :full_name

  def full_name
    "#{first_name} #{last_name}"
  end

  def self.to_s_field
    :first_name
  end

  # Sunspot search #

  def self.associated_models
    [:user, :manager, :department]
  end

  searchable do
    text :first_name, stored: true
    string(:sort_first_name) { self.first_name&.downcase }

    text :middle_name, stored: true
    string(:sort_middle_name) { self.middle_name&.downcase }

    text :last_name, stored: true
    string(:sort_last_name) { self.last_name&.downcase }

    text :employee_number, stored: true

    text :job_title, stored: true
    string(:sort_job_title) { self.job_title&.downcase }

    text :manager, stored: true do
      manager.full_name if self.manager
    end
    string(:sort_manager) { self.manager&.full_name&.downcase }
  end

  private

  def ensure_associated_contact
    build_contact unless contact
  end
end
