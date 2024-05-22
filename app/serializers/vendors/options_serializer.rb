class Vendors::OptionsSerializer < ApplicationSerializer
  object_as :vendor

  attributes :id, :slug, :name
end
