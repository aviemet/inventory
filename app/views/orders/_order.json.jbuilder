json.extract! order, :id, :number, :user_id, :ordered_on, :delivered_on, :canceled_on, :returned_on, :shipping, :vendor_id, :created_at, :updated_at
json.url order_url(order, format: :json)
