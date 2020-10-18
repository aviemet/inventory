FactoryBot.define do
  factory :item_category do
    name { Faker::Computer.type }
  end
end
