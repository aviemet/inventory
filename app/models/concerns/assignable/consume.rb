# Include on a model which can be assigned (checked out) to another model
module Assignable
  module Consume
    extend ActiveSupport::Concern
    include Assignable

    included do
      validates :qty, numericality: { greater_than_or_equal_to: 0 }

      def available_to_checkout?
        self.qty > 0
      end

      def qty_available
        self.qty
      end

      def _after_assignment(assignment, _params)
        return if assignment.qty.nil?

        self.update(qty: self.qty - assignment.qty)
      end
    end
  end
end
