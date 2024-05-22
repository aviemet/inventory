class Assignable::QuantitySerializer < AssignableSerializer
  type :number
  def qty_available
    @object.qty_available
  end
end
