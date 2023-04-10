class Manufacturers::FormDataSerializer < ApplicationSerializer
  object_as :manufacturer

  identifier :slug

  attributes :name
end
