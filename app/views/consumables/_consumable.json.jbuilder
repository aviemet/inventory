json.extract! consumable, :id, :name, :model_number, :min_qty, :qty, :cost, :requestable, :notes, :manufacturer_id, :category_id, :vendor_id, :default_location_id, :created_at, :updated_at
json.url consumable_url(consumable, format: :json)
