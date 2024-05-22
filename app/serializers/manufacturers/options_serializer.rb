class Manufacturers::OptionsSerializer < ApplicationSerializer
  object_as :manufacturer

  attributes :id, :slug, :name
end
