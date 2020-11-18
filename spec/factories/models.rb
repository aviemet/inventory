FactoryBot.define do
  factory :model do
    name { Faker::Device.unique.model_name }
    model_number { Faker::Device.serial }
    notes { Faker::Lorem.sentence }
    item_category { ItemCategory.first || create(:item_category) }
    manufacturer { Manufacturer.first || create(:manufacturer) }
  end
end
