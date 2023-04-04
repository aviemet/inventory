class OrderSerializer < ApplicationSerializer
  attributes :number,
             :user_id,
             :notes,
             :submitted_at,
             :ordered_at,
             :expected_at,
             :delivered_at,
             :canceled_at,
             :returned_at,
             :discount_decription,
             :returned_reason,
             :canceled_reason,
             :shipping_cents,
             :shipping_currency,
             :tax_cents,
             :tax_currency,
             :discount_cents,
             :discount_currency,
             :vendor_id,
             :created_at,
             :updated_at

  # attribute :cost do |order|
  #   if order.purchases.empty?
  #     nil
  #   else
  #     order.purchases.reduce(0) { |sum, purchase| sum + purchase.cost } + order.tax + order.shipping
  #   end
  # end

  # view :associations do
  #   association :activities, serializer: ActivitySerializer
  #   association :user, serializer: UserSerializer
  #   association :vendor, serializer: VendorSerializer
  #   association :person, serializer: PersonSerializer
  #   association :purchases, serializer: PurchaseSerializer
  # end
end
