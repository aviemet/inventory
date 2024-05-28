class Companies::FormDataSerializer < CompanySerializer
  has_one :contact, serializer: Contacts::FormDataSerializer
end
