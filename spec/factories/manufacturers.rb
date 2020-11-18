FactoryBot.define do
  factory :manufacturer do
    name { |n| Faker::Lorem.word + n.to_s }
    company
  end
end
