class Companies::OptionsSerializer < ApplicationSerializer
  object_as :company

  attributes(
    :id,
    :slug,
    :name,
  )
end
