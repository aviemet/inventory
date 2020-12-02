json.extract! item, :id, :title, :model, :serial, :description, :notes, :category_id, :brand_id, :created_at, :updated_at
json.url item_url(item, format: :json)
