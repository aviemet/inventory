FactoryBot.define do
  factory :model do
    name { Faker::Device.model_name }
    model_number { Faker::Device.serial }
    notes { Faker::Lorem.sentence }
    association :manufacturer, factory: :manufacturer
    item_category { ItemCategory.first || create(:item_category) }
  end
end
