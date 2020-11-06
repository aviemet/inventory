FactoryBot.define do
  factory :consumable_category do
    name { Faker::IndustrySegments.super_sector }
    notes { Faker::Lorem.sentence }
  end
end
