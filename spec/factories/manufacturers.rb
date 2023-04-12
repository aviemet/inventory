FactoryBot.define do
  factory :manufacturer do
    name { Faker::Lorem.unique.word }

    company
  end
end
