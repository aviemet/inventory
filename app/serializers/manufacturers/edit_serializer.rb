class Manufacturers::EditSerializer < ApplicationSerializer
  object_as :manufacturer

  identifier :slug

  attributes :id, :slug, :name
end
