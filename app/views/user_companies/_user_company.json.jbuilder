json.extract! user_company, :id, :user_id, :company_id, :role_id, :created_at, :updated_at
json.url user_company_url(user_company, format: :json)
