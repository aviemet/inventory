class Assignable::ConsumeSerializer < ApplicationSerializer
  attribute :qty_available do
    @object.qty_available
  end
end
