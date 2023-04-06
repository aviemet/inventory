class Companies::NewSerializer < ApplicationSerializer
  object_as :company

  attributes :name
end
