class Locations::FormDataSerializer < LocationSerializer
  belongs_to :parent, serializer: Locations::OptionsSerializer, optional: true
end
