class Licenses::EditSerializer < Licenses::FormDataSerializer
  attributes(
    :id,
  )

  belongs_to :vendor, serializer: Vendors::OptionsSerializer
  belongs_to :manufacturer, serializer: Manufacturers::OptionsSerializer
  belongs_to :category, serializer: Categories::OptionsSerializer
end
