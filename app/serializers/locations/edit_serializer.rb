class Locations::EditSerializer < ApplicationSerializer
  object_as :location

  identifier :slug

  attributes :name,
             :parent_id,
             :currency
end
