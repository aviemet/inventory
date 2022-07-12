# Include on a model which can be assigned (checked out) to another model
module Assignable
  module Consume
    extend ActiveSupport::Concern
    include Assignable

    included do
      def _after_assignment(assignment, _params)
        return if assignment.qty.nil?

        self.update(qty: self.qty - assignment.qty)
      end
    end

  end
end
