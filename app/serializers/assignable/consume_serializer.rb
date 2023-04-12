class Assignable::ConsumeSerializer < ApplicationSerializer
  type :number
  def qty_available
    @object.qty_available
  end
end
