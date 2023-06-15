class Consumables::OptionsSerializer < Assignable::QuantitySerializer
  object_as :consumable

  attributes(
    :id,
    :name,
  )
end
