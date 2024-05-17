# == Schema Information
#
# Table name: purchases
#
#  id               :bigint           not null, primary key
#  cost_cents       :integer          default(0), not null
#  cost_currency    :string           default("USD"), not null
#  notes            :text
#  purchasable_type :string           not null
#  qty              :integer
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  order_id         :bigint
#  purchasable_id   :bigint           not null
#
# Indexes
#
#  index_purchases_on_order_id                             (order_id)
#  index_purchases_on_purchasable_type_and_purchasable_id  (purchasable_type,purchasable_id)
#
# Foreign Keys
#
#  fk_rails_...  (order_id => orders.id)
#
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
