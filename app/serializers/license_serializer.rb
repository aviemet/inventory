# == Schema Information
#
# Table name: licenses
#
#  id              :bigint           not null, primary key
#  cost_cents      :integer
#  cost_currency   :string           default("USD"), not null
#  expires_at      :datetime
#  key             :text
#  licenser_email  :string
#  licenser_name   :string
#  maintained      :boolean          default(FALSE), not null
#  name            :string           not null
#  notes           :text
#  purchased_at    :datetime
#  qty             :integer
#  reassignable    :boolean          default(FALSE), not null
#  terminates_at   :datetime
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  category_id     :bigint           not null
#  manufacturer_id :bigint           not null
#  status_label_id :bigint
#  vendor_id       :bigint
#
# Indexes
#
#  index_licenses_on_category_id      (category_id)
#  index_licenses_on_manufacturer_id  (manufacturer_id)
#  index_licenses_on_status_label_id  (status_label_id)
#  index_licenses_on_vendor_id        (vendor_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (manufacturer_id => manufacturers.id)
#  fk_rails_...  (status_label_id => status_labels.id)
#  fk_rails_...  (vendor_id => vendors.id)
#
class LicenseSerializer < Assignable::QuantitySerializer
  object_as :license

  attributes(
    :id,
    :name,
    :qty,
    :key,
    :licenser_name,
    :licenser_email,
    :reassignable,
    :cost_currency,
    :purchased_at,
    :expires_at,
    :terminates_at,
    :maintained,
    :notes,
    :category_id,
    :vendor_id,
    :manufacturer_id,
    :created_at,
    :updated_at,
  )

  type :number
  def cost
    currency_for(license)
  end
end
