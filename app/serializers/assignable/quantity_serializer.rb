class Assignable::QuantitySerializer < AssetSerializer
  attribute :qty_available do
    asset.qty_available
  end
end
