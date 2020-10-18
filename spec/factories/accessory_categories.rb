FactoryBot.define do
  factory :accessory_category do
    name { Faker::Company.buzzword }
    notes { Faker::Lorem.sentence }
  end
end
