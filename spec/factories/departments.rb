FactoryBot.define do
  factory :department do
    name { Faker::Commerce.department(max: 1) }
    location { create(:location) }
    manager { create(:person) }
    company { create(:company) }
  end
end
