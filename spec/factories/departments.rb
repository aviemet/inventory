FactoryBot.define do
  factory :department do
    name { Faker::Commerce.department(max: 1) }
    location { create(:location) }
  end
end
