class CompanySerializer < ApplicationSerializer
  attributes(
    :name,
    :slug,
    :settings,
    :created_at,
    :updated_at,
  )
end
