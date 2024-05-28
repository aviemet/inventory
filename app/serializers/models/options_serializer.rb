class Models::OptionsSerializer < ApplicationSerializer
  object_as :model

  identifier :slug

  attributes :id, :slug, :name
end
