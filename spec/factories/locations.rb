FactoryBot.define do
  factory :location do
    name { Faker::Address.community }
  end
end
