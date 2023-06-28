class CompanySerializer < ApplicationSerializer
  attributes(
    :slug,
    :name,
    :settings,
    :default_currency,
    :created_at,
    :updated_at,
  )
end
