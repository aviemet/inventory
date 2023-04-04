class Assignable::QuantitySerializer < AssetSerializer
  attribute
  def qty_available
    asset.qty_available
  end
end
