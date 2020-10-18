FactoryBot.define do
  factory :location do
    name { Faker::Address.community }
    association :company, factory: :company
  end
end
