# Include on a model which can be assigned (checked out) to another model
module Assignable
  module Quantity
    extend ActiveSupport::Concern
    include Assignable

    included do
      def unassign(assignment = self.assignments.where(active: true).last, returned_at: Time.current)
        success = false

        self.transaction do
          self._before_unassignment(assignment, params) if self.respond_to?(:_before_unassignment)
          self.before_unassignment(assignment, params) if self.respond_to?(:before_unassignment)

          if assignment.update({
            active: false,
            returned_at: returned_at
          })
            success = true
          end

          self._after_unassignment(assignment, params) if self.respond_to?(:_after_unassignment)
          self.after_unassignment(assignment, params) if self.respond_to?(:after_unassignment)
        end

        return success
      end
    end

  end
end
