json.extract! phone, :id, :number, :extension, :notes, :contact_id, :created_at, :updated_at
json.url phone_url(phone, format: :json)
