FactoryBot.define do
  factory :item do    
    title { Faker::Device.model_name }
    asset_tag { Faker::Device.unique.serial }
    serial { Faker::Device.serial }
    cost { Faker::Commerce.price(range: 500..2000.0) }
    purchase_date { Date.yesterday }
    notes { Faker::Lorem.sentence }
    item_category { ItemCategory.first || create(:item_category) }
    model { create(:model) }
    vendor { create(:vendor) }
    default_location { create(:location) }
    company { create(:company) }
  end
end
