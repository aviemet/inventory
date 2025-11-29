class Assignable::QuantitySerializer < AssignableSerializer
  type :number
  delegate :qty_available, to: :@object
end
