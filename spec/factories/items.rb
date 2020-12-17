FactoryBot.define do
  factory :item do
    title { Faker::Device.model_name }
    asset_tag { |n| Faker::Lorem.word + n.to_s }
    serial { |n| Faker::Lorem.word + n.to_s }
    cost { Faker::Commerce.price(range: 500..2000.0) }
    purchased_at { Time.zone.yesterday.end_of_day }
    requestable { true }
    notes { Faker::Lorem.sentence }
    default_location factory: :location
    model
    vendor
    company
  end
end
