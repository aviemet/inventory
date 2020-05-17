json.extract! purchase, :id, :asset_id, :price, :shipping, :tax, :qty, :vendor_id, :notes, :purchased_at, :received_at, :created_at, :updated_at
json.url purchase_url(purchase, format: :json)
