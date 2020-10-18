FactoryBot.define do
  factory :location do
    name { Faker::Address.community }
    company { create(:company) }
  end
end
