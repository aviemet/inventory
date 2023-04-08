class Companies::FormDataSerializer < ApplicationSerializer
  object_as :company

  attributes :name

  has_one :contact, serializer: Contacts::FormDataSerializer
end
