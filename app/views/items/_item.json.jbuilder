json.extract! item, :id, :title, :model, :serial, :description, :notes, :consumeable, :qty, :os, :memory, :storage, :cpu, :cpu_speed, :gpu, :gpu_speed, :gpu_memory, :item_category_id, :brand_id, :created_at, :updated_at
json.url item_url(item, format: :json)
