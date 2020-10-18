FactoryBot.define do
  factory :contact do
    notes { Faker::Lorem.sentence }
  end
end
