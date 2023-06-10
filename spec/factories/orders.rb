FactoryBot.define do
  factory :order do
    number { Faker::Number.number(digits: 10) }
    ordered_at { Time.zone.yesterday.end_of_day }
    shipping { Faker::Commerce.price(range: 10..30.0) }
    tax { Faker::Commerce.price(range: 10..30.0) }

    company
    user
    vendor { association :vendor, company: company }
  end
end
