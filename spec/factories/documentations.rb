FactoryBot.define do
  factory :documentation do
    title { Faker::Book.title }
    body { Faker::Lorem.paragraph }

    company
    category { association :category, company: company }
  end
end
