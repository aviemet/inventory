class Phones::FormDataSerializer < PhoneSerializer
  belongs_to :contact, serializer: ContactSerializer
  belongs_to :category, serializer: CategorySerializer
end
