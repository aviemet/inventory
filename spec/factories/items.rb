FactoryBot.define do
  factory :item do
    name { Faker::Device.model_name }
    cost { Faker::Commerce.price(range: 500..2000.0) }
    purchased_at { Time.zone.yesterday.end_of_day }
    status_label
    model
    company
  end
end
