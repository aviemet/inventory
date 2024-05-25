class Contracts::SpotlightSerializer < ApplicationSerializer
  object_as :contract

  identifier :slug

  attributes(
    :slug,
    :name,
    :number,
    :vendor_id,
    :category_id,
    id: { type: :string },
  )

  belongs_to :category, serializer: Categories::OptionsSerializer
  belongs_to :vendor, serializer: Vendors::OptionsSerializer
end
