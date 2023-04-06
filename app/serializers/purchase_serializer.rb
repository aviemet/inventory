class PurchaseSerializer < ApplicationSerializer
  object_as :purchase

  attributes(
    :purchasable_type,
    :purchasable_id,
    :order_id,
    :cost,
    :cost_currency,
    :qty,
    :notes,
    :created_at,
    :updated_at,
  )

  has_one :company, serializer: CompanySerializer
  has_one :department, serializer: DepartmentSerializer
  has_many :activities, serializer: ActivitySerializer
  belongs_to :item, serializer: ItemSerializer
  belongs_to :accessory, serializer: AccessorySerializer
  belongs_to :component, serializer: ComponentSerializer
  belongs_to :consumable, serializer: ConsumableSerializer
  belongs_to :order, serializer: OrderSerializer
end
