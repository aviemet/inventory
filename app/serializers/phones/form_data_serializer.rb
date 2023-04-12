class Phones::FormDataSerializer < ApplicationSerializer
  object_as :phone

  attributes(
    :number,
    :extension,
    :notes,
    :contact_id,
    :category_id,
    :created_at,
    :updated_at,
  )
end
