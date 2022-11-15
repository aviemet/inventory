FactoryBot.define do
  factory :accessory do
    name { Faker::Device.unique.model_name }
    cost { Faker::Commerce.price(range: 0..100.0) }
    qty { 10 }
    status_label
    model
    vendor
    company
  end
end
