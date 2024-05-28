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
class Order < ApplicationRecord
  include Ownable

  pg_search_scope(
    :search,
    against: [:number], associated_against: {
      user: [:email],
      person: [:first_name, :middle_name, :last_name, :employee_number, :job_title],
      vendor: [:name]
    }, using: {
      tsearch: { prefix: true },
      trigram: {}
    },
    ignoring: :accents,
  )

  tracked
  resourcify

  monetize :shipping_cents, allow_nil: true
  monetize :tax_cents, allow_nil: true
  monetize :discount_cents, allow_nil: true
  monetize :cost_cents, disable_validation: true

  def cost_cents
    purchases.sum(&:cost)
  end

  def cost
    Money.new(cost_cents, purchases.first&.cost_currency || Money.default_currency)
  end

  belongs_to :vendor
  belongs_to :user
  has_one :person, through: :user
  has_many :purchases, dependent: :nullify

  scope :includes_associated, -> { includes([:purchases, :user, :vendor]) }

end
