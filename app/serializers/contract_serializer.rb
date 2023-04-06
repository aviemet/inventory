class ContractSerializer < ApplicationSerializer
  object_as :contract

  attributes(
    :name,
    :number,
    :notes,
    :begins_at,
    :ends_at,
    :vendor_id,
    :category_id,
    :created_at,
    :updated_at,
  )
end
