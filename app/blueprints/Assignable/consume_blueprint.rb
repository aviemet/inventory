class Assignable::ConsumeBlueprint < ApplicationBlueprint
  field(:qty_available) { |asset| asset.qty_available }
end
