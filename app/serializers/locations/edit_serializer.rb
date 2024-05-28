class Locations::EditSerializer < Locations::FormDataSerializer
  attributes(
    :id,
    :slug,
  )

  belongs_to :parent, serializer: Locations::OptionsSerializer
end
