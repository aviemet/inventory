json.extract! category, :id, :categorizable_id, :categorizable_type, :name, :description, :created_at, :updated_at
json.url category_url(category, format: :json)
