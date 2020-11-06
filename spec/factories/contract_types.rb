FactoryBot.define do
  factory :contract_type do
    name { Faker::Verb.past }
  end
end
