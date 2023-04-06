class Companies::EditSerializer < ApplicationSerializer
  object_as :company

  attributes :name,
             :slug,
             :settings

  has_one :contact, serializer: ContactSerializer
end
