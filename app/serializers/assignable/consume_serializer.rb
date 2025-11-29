class Assignable::ConsumeSerializer < AssignableSerializer
  type :number
  delegate :qty_available, to: :@object
end
