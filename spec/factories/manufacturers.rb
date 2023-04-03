FactoryBot.define do
  factory :manufacturer do
    name { Faker::Lorem.word }

    company
  end
end
