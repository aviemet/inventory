json.extract! email, :id, :email, :notes, :contact_id, :created_at, :updated_at
json.url email_url(email, format: :json)
