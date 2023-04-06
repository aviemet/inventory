class Assignable::QuantityBlueprint < ApplicationBlueprint
  field(:qty_available) { |asset| asset.qty_available }
end
