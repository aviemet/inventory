class Companies::EditSerializer < ApplicationSerializer
  object_as :company

  attributes :name,
             :slug,
             :settings

  association :contact, serializer: ContactSerializer
end
