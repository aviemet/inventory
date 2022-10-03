class Assignment < ApplicationRecord
  audited

  enum status: %i(approved requested denied)

  attribute :assigned_at, default: Time.current
  attribute :active, default: true

  belongs_to :assignable, polymorphic: true
  belongs_to :assign_toable, polymorphic: true
  belongs_to :created_by, class_name: "User", required: false
  belongs_to :location

  ASSIGNABLE_TYPES = %w(Item License Accessory Consumable Component).freeze
  ASSIGN_TOABLE_TYPES = %w(Person Item Location).freeze
  validates :assignable_type, inclusion: { in: ASSIGNABLE_TYPES }
  validates :assign_toable_type, inclusion: { in: ASSIGN_TOABLE_TYPES }
  validates_presence_of :assignable_type
  validates_presence_of :assignable_id
  validates_presence_of :assign_toable_type
  validates_presence_of :assign_toable_id
  validates_presence_of :assigned_at
  validates_presence_of :location_id

  scope :includes_associated, -> { includes([:location, :created_by, :status_type, :audits]) }
  scope :active, -> { where(active: true) }
end
