class Assets::OptionsSerializer < ApplicationSerializer
  object_as :asset

  attributes(
    :id,
    :name,
  )
end
