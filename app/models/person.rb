# == Schema Information
#
# Table name: people
#
#  id              :bigint           not null, primary key
#  active          :boolean          default(TRUE), not null
#  employee_number :string
#  first_name      :string           not null
#  guid            :string
#  job_title       :string
#  last_name       :string           not null
#  middle_name     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  location_id     :bigint
#  manager_id      :bigint
#  user_id         :bigint
#
# Indexes
#
#  index_people_on_guid         (guid) UNIQUE
#  index_people_on_location_id  (location_id)
#  index_people_on_manager_id   (manager_id)
#  index_people_on_user_id      (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (location_id => locations.id)
#  fk_rails_...  (manager_id => people.id)
#  fk_rails_...  (user_id => users.id)
#
class Person < ApplicationRecord
  include Ownable
  include Contactable
  include AssignToable
  include Fieldable
  include Documentable

  include PgSearchable
  pg_search_config(
    against: [:first_name, :middle_name, :last_name, :employee_number, :job_title], associated_against: {
      manager: [:first_name, :middle_name, :last_name, :employee_number, :job_title],
      user: [:email]
    },
    enable_multisearch: true,
  )

  tracked
  resourcify
  rolify

  belongs_to :user, optional: true
  belongs_to :manager, class_name: "Person", optional: true
  belongs_to :location, optional: true

  has_many :ticket_assignments, dependent: :nullify
  has_many :tickets, through: :ticket_assignments, inverse_of: :assignees

  has_many :person_group_assignments, dependent: :destroy
  has_many :groups, through: :person_group_assignments, source: :person_group

  validates :first_name, presence: true
  validates :last_name, presence: true

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
    self.location || self.department&.location
  end

end
