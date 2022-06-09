FactoryBot.define do
  factory :vendor do
    name { Faker::Company.name }
    url { Faker::Internet.url }
    association :company, strategy: :create
  end
end
