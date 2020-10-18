FactoryBot.define do
  factory :item do    
    title { Faker::Device.model_name }
    asset_tag { Faker::Device.unique.serial }
    serial { Faker::Device.unique.serial }
    cost { Faker::Commerce.price(range: 500..2000.0) }
    purchase_date { Date.yesterday }
    requestable { true }
    notes { Faker::Lorem.sentence }
    item_category { ItemCategory.first || create(:item_category) }
    association :model, factory: :model
    association :vendor, factory: :vendor
    association :default_location, factory: :location
    association :company, factory: :company
  end
end
