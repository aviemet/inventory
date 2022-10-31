FactoryBot.define do
  factory :vendor do
    name { Faker::Company.name }

    company
  end
end
