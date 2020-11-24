class Assignment < ApplicationRecord
  belongs_to :assignable, polymorphic: true
  belongs_to :assign_toable, polymorphic: true

  ASSIGNABLE_TYPES = %w(Item License Accessory).freeze
  ASSIGN_TOABLE_TYPES = %w(Person Item Location).freeze
  validates :assignable_type, inclusion: { in: ASSIGNABLE_TYPES }
  validates :assign_toable_type, inclusion: { in: ASSIGN_TOABLE_TYPES }
  validates_presence_of :assignable_type
  validates_presence_of :assignable_id
  validates_presence_of :assign_toable_type
  validates_presence_of :assign_toable_id
  validates_uniqueness_of :active, if: :active

  after_initialize :defaults

  private

  def defaults
    return unless new_record?

    self.assigned_at ||= Time.current
    self.active ||= true
  end
end
