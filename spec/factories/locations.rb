FactoryBot.define do
  factory :location do
    name { Faker::Address.community }

    company
  end
end
