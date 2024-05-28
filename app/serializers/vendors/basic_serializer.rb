class Vendors::BasicSerializer < VendorSerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )
end
