# Include on a model which can be assigned (checked out) to another model
module Assignable
  module Quantity
    extend ActiveSupport::Concern
    include Assignable

    included do
      belongs_to :status_label, default: -> { StatusLabel.find_by_name("Deployable") }

      validates :qty, numericality: { greater_than: 0 }, allow_blank: false

      def available_to_checkout?
        self.assignments.active.sum(:qty) < self.qty
      end

      def unassign(assignment = self.assignments.where(active: true).last, returned_at: Time.current)
        success = false

        self.transaction do
          self._before_unassignment(assignment, params) if self.respond_to?(:_before_unassignment)
          self.before_unassignment(assignment, params) if self.respond_to?(:before_unassignment)

          if assignment.update({
            active: false,
            returned_at:
          })
            success = true
          end

          self._after_unassignment(assignment, params) if self.respond_to?(:_after_unassignment)
          self.after_unassignment(assignment, params) if self.respond_to?(:after_unassignment)
        end

        success
      end
    end

    def _after_assignment(assignment, _params)
      return if assignment.qty.nil?

      self.update(qty: self.qty - assignment.qty)
    end
  end
end
