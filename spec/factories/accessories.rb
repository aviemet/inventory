FactoryBot.define do
  factory :accessory do
    name { Faker::Device.model_name }
    serial { Faker::Device.unique.serial }
    model_number { Faker::Device.serial }
    min_qty { 1 }
    qty { Faker::Numeric.non_zero_digit }
    cost { Faker::Commerce.price(range: 0..100.0) }
    purchase_date { Date.yesterday }
    requestable { true }
    notes { Faker::Lorem.sentence }
    association :manufacturer, factory: :manufacturer
    association :accessory_category, factory: :accessory_category
    association :vendor, factory: :vendor
    association :default_location, factory: :location
  end
end
