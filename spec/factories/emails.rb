FactoryBot.define do
  factory :email do
    email { Faker::Internet.email }
    contact
    category
  end
end
