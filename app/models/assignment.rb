class Assignment < ApplicationRecord
  class_attribute :assignable_types, default: %w(Asset Item Accessory Component Consumable License).freeze
  class_attribute :assign_toable_types, default: %w(Asset Person Item Location).freeze

  tracked recipient: proc { |_controller, a| a.assignable },
          params: {
            assign_toable_type: proc { |_controller, a| a.assign_toable_type },
            assign_toable_id: proc { |_controller, a| a.assign_toable_id }
          }
  resourcify

  attr_reader :assignable_types, :assign_toable_types

  enum status: %i(approved requested denied)

  attribute :assigned_at, default: Time.current
  attribute :active, default: true

  belongs_to :assignable, polymorphic: true
  belongs_to :assign_toable, polymorphic: true
  belongs_to :created_by, class_name: "Person", required: false
  belongs_to :location

  validates :assignable_type, inclusion: { in: self.assignable_types }
  validates :assign_toable_type, inclusion: { in: self.assign_toable_types }
  validates_presence_of :assignable_type
  validates_presence_of :assignable_id
  validates_presence_of :assign_toable_type
  validates_presence_of :assign_toable_id
  validates_presence_of :assigned_at
  validates_presence_of :location_id

  scope :includes_associated, -> { includes([:location, :created_by, :activities]) }
  scope :active, -> { where(active: true) }
end
