# Include on a model which can be assigned (checked out) to another model
module Assignable
  module Single
    extend ActiveSupport::Concern
    include Assignable

    included do
      def assignment
        self.assignments.select(&:active).first if self.assignments
      end

      def assigned_to
        self.assignment&.assign_toable
      end

      def assigned?
        !self.assignment.nil?
      end

      def unassign(returned_at: nil, name: nil)
        self._before_unassignment(assignment, params) if self.respond_to?(:_before_unassignment)
        self.before_unassignment(assignment, params) if self.respond_to?(:before_unassignment)
        self.transaction do
          self.assignment&.update({
            active: false,
            returned_at: returned_at || Time.current
          })
          self.update({ name: name }) unless name.nil?
        end
        self._after_unassignment(assignment, params) if self.respond_to?(:_after_unassignment)
        self.after_unassignment(assignment, params) if self.respond_to?(:after_unassignment)
        self
      end
    end
  end
end
