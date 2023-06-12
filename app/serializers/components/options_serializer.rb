class Components::OptionsSerializer < Assignable::QuantitySerializer
  object_as :component

  attributes(
    :id,
    :name,
  )
end
