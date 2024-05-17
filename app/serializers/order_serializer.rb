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
    :updated_at,
  )
end
