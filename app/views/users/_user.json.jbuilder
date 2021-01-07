json.extract! user, :id, :email, :person, :remember_created_at, :sign_in_count, :current_sign_in_at, :last_sign_in_at, :locked_at, :active_company_id, :active, :created_at, :updated_at
json.current_sign_in_ip user.current_sign_in_ip.to_s
json.last_sign_in_ip user.last_sign_in_ip.to_s
json.url user_url(user, format: :json)
