class Assignable::QuantitySerializer < ApplicationSerializer
  type :number
  def qty_available
    @object.qty_available
  end
end
