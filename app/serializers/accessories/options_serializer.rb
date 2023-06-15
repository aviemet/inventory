class Accessories::OptionsSerializer < Assignable::QuantitySerializer
  object_as :accessory

  attributes(
    :id,
    :name,
  )
end
