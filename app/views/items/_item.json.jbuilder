json.extract! item, :id, :name, :model, :serial, :notes, :category, :created_at, :updated_at
json.url item_url(item, format: :json)
