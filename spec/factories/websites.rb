FactoryBot.define do
  factory :website do
    url { Faker::Internet.url }
    name { Faker::Lorem.word }
    contact
  end
end
