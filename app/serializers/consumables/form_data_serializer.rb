class Consumables::FormDataSerializer < ConsumableSerializer
  belongs_to :model, serializer: Models::OptionsSerializer, optional: true
  belongs_to :vendor, serializer: Vendors::OptionsSerializer, optional: true
  belongs_to :default_location, serializer: Locations::OptionsSerializer, optional: true
end
