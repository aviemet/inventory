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

  enum status: { :approved => 0, :requested => 1, :denied => 2 }

  attribute :assigned_at, default: -> { Time.current }
  attribute :active, default: true

  belongs_to :assignable, polymorphic: true
  belongs_to :assign_toable, polymorphic: true
  belongs_to :created_by, class_name: "Person", optional: true
  belongs_to :location

  validates :assignable_type, inclusion: { in: self.assignable_types }
  validates :assign_toable_type, inclusion: { in: self.assign_toable_types }
  validates :assignable_type, presence: true
  validates :assign_toable_type, presence: true
  validates :assigned_at, presence: true

  scope :includes_associated, -> { includes([:location, :created_by, :activities]) }
  scope :active, -> { where(active: true) }
end
