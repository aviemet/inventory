FactoryBot.define do
  factory :accessory do
    name { Faker::Device.unique.model_name }
    serial { |n| Faker::Lorem.word + n.to_s }
    model_number { Faker::Device.serial }
    min_qty { 1 }
    qty { Faker::Number.non_zero_digit }
    cost { Faker::Commerce.price(range: 0..100.0) }
    purchase_date { Date.yesterday }
    requestable { true }
    notes { Faker::Lorem.sentence }
    default_location factory: :location
    manufacturer
    accessory_category
    vendor
    company
  end
end
