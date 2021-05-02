# Include on a model which can be assigned (checked out) to another model
module Assignable
  module Single
    extend ActiveSupport::Concern
    include Assignable

    included do
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

      def unassign(returned_at: nil)
        self._before_unassignment(assignment, params) if self.respond_to?(:_before_unassignment)
        self.before_unassignment(assignment, params) if self.respond_to?(:before_unassignment)
        self.assignment&.update({
          active: false,
          returned_at: returned_at || Time.current
        })
        self._after_unassignment(assignment, params) if self.respond_to?(:_after_unassignment)
        self.after_unassignment(assignment, params) if self.respond_to?(:after_unassignment)
      end
    end
  end
end
