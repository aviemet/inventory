module Assignable
  extend ActiveSupport::Concern

  included do
    has_many :assignments, as: :assignable

    def assign_to(assign_toable, assigned_at = DateTime.now, expected_at = nil)
      Assignment.create({
        assignable: self,
        assign_toable: assign_toable,
        assigned_at: assigned_at,
        expected_at: expected_at
      })
    end

    def assignment
      self.assignments.where(active: true).first
    end

    def assigned_to
      self&.assignment&.assign_toable
    end

    def unassign(returned_at = DateTime.now)
      self.assignment.update({
        active: false,
        returned_at: returned_at
      })
    end
  end
end
