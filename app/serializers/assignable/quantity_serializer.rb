class Assignable::QuantitySerializer < ApplicationSerializer
  attribute :qty_available do
    asset.qty_available
  end
end
