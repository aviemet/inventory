FactoryBot.define do
  factory :component do
    name { Faker::Device.model_name }
    qty { 1 }
    min_qty { 1 }
    cost { Faker::Commerce.price(range: 500..2000.0) }
    purchased_at { Time.zone.yesterday.end_of_day }
    notes { Faker::Lorem.sentence }
    status_type
    model
    manufacturer
    category
    vendor
    company
  end
end
