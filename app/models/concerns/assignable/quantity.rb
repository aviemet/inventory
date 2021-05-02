# Include on a model which can be assigned (checked out) to another model
module Assignable
  module Quantity
    extend ActiveSupport::Concern
    include Assignable

    included do
      def unassign(assignment_id, params = {})
        self.transaction do
          assignment = self.assignments.find(assignment_id)

          self._before_unassignment(assignment, params) if self.respond_to?(:_before_unassignment)
          self.before_unassignment(assignment, params) if self.respond_to?(:before_unassignment)
          assignment.update({
            active: false,
            returned_at: params&.[](:returned_at) || Time.current
          })
          self._after_unassignment(assignment, params) if self.respond_to?(:_after_unassignment)
          self.after_unassignment(assignment, params) if self.respond_to?(:after_unassignment)
        end
      end

      def _after_assignment(assignment, _params)
        return if assignment.qty.nil?

        self.update(qty: self.qty - assignment.qty)
      end

      def _after_unassignment(assignment, _params)
        return if assignment.qty.nil?

        self.update(qty: self.qty + assignment.qty)
      end
    end
  end
end
