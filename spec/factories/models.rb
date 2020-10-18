FactoryBot.define do
  factory :model do
    name { Faker::Device.model_name }
    model_number { Faker::Device.serial }
    notes { Faker::Lorem.sentence }
    manufacturer { create(:manufacturer) }
    # Simply using the ItemCategory factory results in not_unique error
    item_category { ItemCategory.first || create(:item_category) }
  end
end
