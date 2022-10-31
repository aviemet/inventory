FactoryBot.define do
  factory :contract do
    name { Faker::Name.name }
    vendor
    category
    company
  end
end
