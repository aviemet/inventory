FactoryBot.define do
  factory :accessory do
    name { Faker::Device.model_name }
    serial { Faker::Device.serial }
    model_number { Faker::Device.serial }
    min_qty { 1 }
    qty { Faker::Numeric.non_zero_digit }
    cost { Faker::Commerce.price(range: 0..100.0) }
    purchase_date { Date.yesterday }
    requestable { true }
    notes { Faker::Lorem.sentence }
    manufacturer { create(:manufacturer) }
    accessory_category { AccessoryCategory.first || create(:accessory_category) }
    vendor { create(:vendor) }
    default_location { create(:location) }
  end
end
