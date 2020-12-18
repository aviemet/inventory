module Assignable
  extend ActiveSupport::Concern

  included do
    has_many :assignments, as: :assignable

    def assign_to(assign_toable, assigned_at: Time.current, expected_at: nil)
      Assignment.create({
        assignable: self,
        assign_toable: assign_toable,
        assigned_at: assigned_at,
        expected_at: expected_at
      })
    end

    def assignment
      return if self.assignments.empty?

      self.assignments.select(&:active).first
    end

    def assigned_to
      self.assignment&.assign_toable
    end

    def assigned?
      !self.assignment.nil?
    end

    def unassign(returned_at = Time.current)
      self.assignment&.update({
        active: false,
        returned_at: returned_at
      })
    end
  end
end
