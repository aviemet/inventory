class Addresses::FormDataSerializer < AddressSerializer
  belongs_to :contact, serializer: ContactSerializer
  belongs_to :category, serializer: CategorySerializer
end
