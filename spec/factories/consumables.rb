FactoryBot.define do
  factory :consumable do
    name { Faker::Device.model_name }
    min_qty { 1 }
    qty { Faker::Number.non_zero_digit }
    cost { Faker::Number.decimal(l_digits: 2, r_digits: 2) }
    requestable { false }
    notes { Faker::Lorem.sentence }
    default_location factory: :location
    manufacturer
    model
    category
    vendor
    company
  end
end
