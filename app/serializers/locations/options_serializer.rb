class Locations::OptionsSerializer < ApplicationSerializer
  object_as :location

  identifier :slug

  attributes(
    :id,
    :slug,
    :name,
  )
end
