class Manufacturers::NewSerializer < ApplicationSerializer
  object_as :manufacturer

  identifier :slug

  attributes :id, :name
end
