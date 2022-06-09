FactoryBot.define do
  factory :contract do
    name { Faker::Name.name }
    vendor
    category
    association :company, strategy: :create
  end
end
