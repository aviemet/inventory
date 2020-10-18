FactoryBot.define do
  factory :address do
    address { Faker::Address.street_address }
    address_2 { Faker::Address.secondary_address }
    city { Faker::Address.city }
    zone { Faker::Address.state }
    postal { Faker::Address.zip }
    notes { Faker::Lorem.sentence }
    contact { create(:contact) }
    address_type { AddressType.first || create(:address_type) }
  end
end
