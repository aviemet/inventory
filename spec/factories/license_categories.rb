FactoryBot.define do
  factory :license_category do
    name { Faker::IndustrySegments.industry }
  end
end
