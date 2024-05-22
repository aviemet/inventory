class Licenses::FormDataSerializer < LicenseSerializer
  belongs_to :vendor, serializer: Vendors::OptionsSerializer, optional: true
  belongs_to :manufacturer, serializer: Manufacturers::OptionsSerializer, optional: true
  belongs_to :category, serializer: Categories::OptionsSerializer, optional: true
end
