class Models::OptionsSerializer < ApplicationSerializer
  object_as :model

  identifier :slug

  attributes :id, :name
end
