class Companies::BasicSerializer < CompanySerializer
  attributes(
    :id,
    :slug,
    :created_at,
    :updated_at,
  )
end
