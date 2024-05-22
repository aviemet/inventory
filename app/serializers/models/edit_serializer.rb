class Models::EditSerializer < Models::FormDataSerializer
  attributes(
    :id,
    :slug,
  )

  belongs_to :manufacturer, serializer: Manufacturers::OptionsSerializer
  belongs_to :category, serializer: Categories::OptionsSerializer
end
