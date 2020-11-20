module Assignable
  extend ActiveSupport::Concern

  included do
    has_many :assignments, as: :assignable

    def assign_to(assignment_recipient)
      return if self.assignments.count != 0

      Assignment.create({ assignable: self, assign_toable: assignment_recipient })
    end

    def assignment
      self.assignments.where(active: true).first
    end

    def assigned_to
      self.assignment.assign_toable
    end

  end
end
