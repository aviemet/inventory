FactoryBot.define do
  factory :vendor do
    name { Faker::Company.name }
    url { Faker::Internet.url }
    company { create(:company) }
  end
end
