class Orders::FormDataSerializer < OrderSerializer
  belongs_to :vendor, serializer: Vendors::OptionsSerializer, optional: true
end
