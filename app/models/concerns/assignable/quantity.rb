# Include on a model which can be assigned (checked out) to another model
module Assignable
  module Quantity
    extend ActiveSupport::Concern
    include Assignable

    included do
      def unassign(assignment = self.assignment.last, returned_at: Time.current)
        self.transaction do
          self._before_unassignment(assignment, params) if self.respond_to?(:_before_unassignment)
          self.before_unassignment(assignment, params) if self.respond_to?(:before_unassignment)

          assignment.update({
            active: false,
            returned_at: returned_at
          })

          self._after_unassignment(assignment, params) if self.respond_to?(:_after_unassignment)
          self.after_unassignment(assignment, params) if self.respond_to?(:after_unassignment)
        end
      end
    end

  end
end
