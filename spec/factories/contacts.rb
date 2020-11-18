FactoryBot.define do
  factory :contact do
    notes { Faker::Lorem.sentence }
    contactable factory: :person
  end
end
