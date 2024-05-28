class Models::FormDataSerializer < ModelSerializer
  belongs_to :manufacturer, serializer: Manufacturers::OptionsSerializer, optional: true
  belongs_to :category, serializer: Categories::OptionsSerializer, optional: true
end
