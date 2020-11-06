FactoryBot.define do
  factory :consumable do
    name { Faker::Device.model_name }
    model_number { Faker::Device.serial }
    min_qty { 1 }
    qty { Faker.number.digit }
    cost { Faker::Number.decimal(l_digits: 2, r_digits: 2) }
    requestable { false }
    notes { Faker::Lorem.sentence }
    manufacturer { Manufacturer.first || create(:manufacturer) }
    consumable_category
    vendor
    default_location factory: :location
  end
end
