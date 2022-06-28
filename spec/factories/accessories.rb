FactoryBot.define do
  factory :accessory do
    name { Faker::Device.unique.model_name }
    serial { |n| Faker::Lorem.word + n.to_s }
    min_qty { 1 }
    qty { Faker::Number.non_zero_digit }
    cost { Faker::Commerce.price(range: 0..100.0) }
    requestable { false }
    notes { Faker::Lorem.sentence }
    default_location factory: :location
    status_type
    model
    manufacturer
    category
    vendor
    association :company, strategy: :create
  end
end
