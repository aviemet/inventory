class Assignable::ConsumeSerializer < AssignableSerializer
  type :number
  def qty_available
    @object.qty_available
  end
end
