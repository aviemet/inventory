FactoryBot.define do
  factory :order do
    number { Faker::Number.number(digits: 10) }
    ordered_on { Date.yesterday }
    shipping { Faker::Commerce.price(range: 10..30.0) }
    tax { Faker::Commerce.price(range: 10..30.0) }
    user
    vendor
  end
end
