class Assignment < ApplicationRecord
  belongs_to :assignable, polymorphic: true
  belongs_to :assign_toable, polymorphic: true

  validates_presence_of :assignable
  validates_presence_of :assign_toable

  ASSIGNABLE_TYPES = %w(Item License Accessory).freeze
  ASSIGN_TOABLE_TYPES = %w(Person Item Location).freeze
  validates :assignable_type, inclusion: { in: ASSIGNABLE_TYPES }
  validates :assign_toable_type, inclusion: { in: ASSIGN_TOABLE_TYPES }

  after_initialize :defaults
  before_save :deactivate_old_assignments

  private

  def defaults
    return unless new_record?

    self.active ||= true
  end

  def deactivate_old_assignments
    Assignment.where({ 
      assignable: assignable,
      active: true
    }).each { |assignment| assignment.update({ active: false }) }
  end
end
