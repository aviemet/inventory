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
FactoryBot.define do
  factory :license do
    name { Faker::Device.model_name }
    qty { 1 }
    key { Faker::Device.serial }
    licenser_name { Faker::Name.name }
    licenser_email { Faker::Internet.email }
    reassignable { true }
    cost { Faker::Number.decimal(l_digits: 2, r_digits: 2) }
    purchased_at { Time.zone.yesterday.end_of_day }
    expires_at { Time.current.next_year }
    terminates_at { Time.current.next_year }
    status_label

    company
    vendor { association :vendor, company: company }
    manufacturer { association :manufacturer, company: company }
    category { association :category, company: company }
  end
end
