class Contracts::EditSerializer < ApplicationSerializer
  object_as :contract

  identifier :slug

  attributes(
    :id,
    :slug,
    :name,
    :number,
    :notes,
    :begins_at,
    :ends_at,
    :vendor_id,
    :category_id,
  )

end
