class Locations::FormDataSerializer < ApplicationSerializer
  belongs_to :parent, serializer: Locations::OptionsSerializer, optional: true
end
