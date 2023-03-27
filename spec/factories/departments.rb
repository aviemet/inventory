FactoryBot.define do
  factory :department do
    name { Faker::Commerce.unique.department(max: 1) }
    manager factory: :person
    company
    location { association :location, company: company }
  end
end
