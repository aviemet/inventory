# == Schema Information
#
# Table name: assignments
#
#  id                 :bigint           not null, primary key
#  active             :boolean          default(TRUE), not null
#  assign_toable_type :string           not null
#  assignable_type    :string           not null
#  assigned_at        :datetime
#  expected_at        :datetime
#  notes              :text
#  qty                :integer          default(1)
#  returned_at        :datetime
#  status             :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  assign_toable_id   :bigint           not null
#  assignable_id      :bigint           not null
#  created_by_id      :bigint
#  location_id        :bigint           not null
#
# Indexes
#
#  index_assignments_on_assign_toable_type_and_assign_toable_id  (assign_toable_type,assign_toable_id)
#  index_assignments_on_assignable_type_and_assignable_id        (assignable_type,assignable_id)
#  index_assignments_on_created_by_id                            (created_by_id)
#  index_assignments_on_location_id                              (location_id)
#
# Foreign Keys
#
#  fk_rails_...  (created_by_id => users.id)
#  fk_rails_...  (location_id => locations.id)
#
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

  enum :status, { approved: 0, requested: 1, denied: 2 }

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
