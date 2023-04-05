class PurchaseSerializer < ApplicationSerializer
  attributes :purchasable_type,
             :purchasable_id,
             :order_id,
             :cost,
             :cost_currency,
             :qty,
             :notes,
             :created_at,
             :updated_at

  # view :associations do
  #   association :department, serializer: DepartmentSerializer
  #   association :activities, serializer: ActivitySerializer
  #   association :item, serializer: ItemSerializer
  #   association :accessory, serializer: AccessorySerializer
  #   association :component, serializer: ComponentSerializer
  #   association :consumable, serializer: ConsumableSerializer
  #   association :order, serializer: OrderSerializer
  # end
end
