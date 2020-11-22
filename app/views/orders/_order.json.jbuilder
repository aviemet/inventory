json.extract! order, :id, :number, :user_id, :ordered_at, :delivered_at, :canceled_at, :returned_at, :shipping, :vendor_id, :created_at, :updated_at
json.url order_url(order, format: :json)
