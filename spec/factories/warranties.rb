FactoryBot.define do
  factory :warranty do
    item
    length { Faker::Number.digit }
  end
end
