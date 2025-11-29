# Include on a model which can be assigned (checked out) to another model
module Assignable
  module Single
    extend ActiveSupport::Concern
    include Assignable

    included do
      has_many :assignments, as: :assignable, dependent: :nullify

      def assignment
        self.assignments.select(&:active).first
      end

      def assigned_to
        self.assignment&.assign_toable
      end

      def available_to_checkout?
        !assigned?
      end

      def assigned?
        !self.assignment.nil?
      end

      def unassign(assignment = self.assignment, returned_at: Time.current)
        return false unless assignment

        self._before_unassignment(assignment, params) if self.respond_to?(:_before_unassignment)
        self.before_unassignment(assignment, params) if self.respond_to?(:before_unassignment)

        success = assignment.update({
          active: false,
          returned_at:
        })

        self._after_unassignment(assignment, params) if self.respond_to?(:_after_unassignment)
        self.after_unassignment(assignment, params) if self.respond_to?(:after_unassignment)

        success
      end

      def _before_assignment(_assignment, _params)
        raise StandardError, "Item is already assigned to #{self.assigned_to.name}" if self.assigned?
      end
    end
  end
end
