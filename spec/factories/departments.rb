FactoryBot.define do
  factory :department do
    name { Faker::Commerce.department(max: 1) }
    association :location, factory: :location
    association :manager, factory: :person
    association :company, factory: :company
  end
end
