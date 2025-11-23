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
class Purchase < ApplicationRecord
  include Ownable

  include PgSearchable
  pg_search_config(
    associated_against: {
      order: [:order_number],
      item: [:name, :asset_tag, :serial],
      accessory: [:name, :serial, :model_number],
      component: [:name, :serial, :model_number],
      consumable: [:name, :serial, :model_number],
    },
  )

  tracked
  resourcify

  monetize :cost_cents

  belongs_to :purchasable, polymorphic: true
  belongs_to :order
end
