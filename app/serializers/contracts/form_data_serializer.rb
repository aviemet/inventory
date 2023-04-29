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

end
