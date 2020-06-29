json.extract! item, :id, :title, :model, :serial, :description, :notes, :item_category_id, :brand_id, :created_at, :updated_at
json.url item_url(item, format: :json)
