class Assets::OptionsSerializer < ApplicationSerializer
  object_as :asset

  attributes(
    :name,
  )
end
