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
FactoryBot.define do
  factory :purchase do

  end
end
