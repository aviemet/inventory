class ModelSerializer < ApplicationSerializer
  object_as :model

  attributes :name
end
