FactoryBot.define do
  factory :license_category do
    name { LicenseCategory.first || Faker::IndustrySegments.industry }
  end
end
