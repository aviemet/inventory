# == Schema Information
#
# Table name: orders
#
#  id                  :bigint           not null, primary key
#  canceled_at         :datetime
#  canceled_reason     :string
#  delivered_at        :datetime
#  discount_cents      :integer
#  discount_currency   :string           default("USD"), not null
#  discount_decription :string
#  expected_at         :datetime
#  notes               :text
#  number              :string
#  ordered_at          :datetime
#  returned_at         :datetime
#  returned_reason     :string
#  shipping_cents      :integer
#  shipping_currency   :string           default("USD"), not null
#  submitted_at        :datetime
#  tax_cents           :integer
#  tax_currency        :string           default("USD"), not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  user_id             :bigint           not null
#  vendor_id           :bigint           not null
#
# Indexes
#
#  index_orders_on_number     (number) UNIQUE
#  index_orders_on_user_id    (user_id)
#  index_orders_on_vendor_id  (vendor_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#  fk_rails_...  (vendor_id => vendors.id)
#
class OrderSerializer < ApplicationSerializer
  object_as :order

  attributes(
    :number,
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
    :user_id,
    :vendor_id,
  )

  type "Money"
  def cost
    currency_for(:cost)
  end

  type "Money"
  def shipping_cost
    currency_for(:shipping)
  end

  type "Money"
  def discount_cost
    currency_for(:discount)
  end

  type "Money"
  def tax_cost
    currency_for(:tax)
  end
end
