class Models::OptionsSerializer < ApplicationSerializer
  object_as :model

  attributes :name
end
