json.extract! model, :id, :name, :manufacturer_id, :item_category_id, :model_number, :notes, :created_at, :updated_at
json.url model_url(model, format: :json)
