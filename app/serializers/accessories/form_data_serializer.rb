class Accessories::FormDataSerializer < AccessorySerializer
  belongs_to :model, serializer: Models::OptionsSerializer
  belongs_to :vendor, serializer: Vendors::OptionsSerializer
  belongs_to :default_location, serializer: Locations::OptionsSerializer
  belongs_to :category, serializer: CategorySerializer
  belongs_to :status_label, serializer: StatusLabelSerializer
  belongs_to :manufacturer, serializer: ManufacturerSerializer
end
