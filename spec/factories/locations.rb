FactoryBot.define do
  factory :location do
    name { Faker::Address.community }
    association :company, strategy: :create
  end
end
