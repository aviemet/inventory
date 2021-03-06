FactoryBot.define do
  factory :department do
    name { Faker::Commerce.unique.department(max: 1) }
    manager factory: :person
    location
    company
  end
end
