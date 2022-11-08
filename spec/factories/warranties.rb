FactoryBot.define do
  factory :warranty do
    asset factory: :item
    length { Faker::Number.digit }
  end
end
