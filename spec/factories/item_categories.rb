FactoryBot.define do
  factory :item_category do
    name { ItemCategory.first || Faker::Computer.type }
  end
end
