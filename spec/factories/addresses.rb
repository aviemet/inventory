# == Schema Information
#
# Table name: addresses
#
#  id          :bigint           not null, primary key
#  address     :string           not null
#  address_2   :string
#  city        :string
#  country     :string
#  notes       :text
#  postal      :string
#  region      :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :bigint           not null
#  contact_id  :bigint           not null
#
# Indexes
#
#  index_addresses_on_category_id  (category_id)
#  index_addresses_on_contact_id   (contact_id)
#
# Foreign Keys
#
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (contact_id => contacts.id)
#
FactoryBot.define do
  factory :address do
    address { Faker::Address.street_address }
    address_2 { Faker::Address.secondary_address }
    city { Faker::Address.city }
    zone { Faker::Address.state }
    postal { Faker::Address.zip }
    notes { Faker::Lorem.sentence }
    contact
    address_type
  end
end
