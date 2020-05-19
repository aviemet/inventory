json.extract! purchase, :id, :item_id, :price, :shipping, :tax, :qty, :notes, :created_at, :updated_at
json.url purchase_url(purchase, format: :json)
