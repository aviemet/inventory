class Contracts::FormDataSerializer < ApplicationSerializer
  object_as :contract

  identifier :slug

  attributes(
    :name,
    :number,
    :notes,
    :begins_at,
    :ends_at,
    :vendor_id,
    :category_id,
  )

  belongs_to :vendor, serializer: Vendors::OptionsSerializer, optional: true
  belongs_to :category, serializer: Categories::OptionsSerializer, optional: true
end
