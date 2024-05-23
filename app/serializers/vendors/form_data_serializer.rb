class Vendors::FormDataSerializer < VendorSerializer
  has_one :contact, serializer: Contacts::FormDataSerializer
end
