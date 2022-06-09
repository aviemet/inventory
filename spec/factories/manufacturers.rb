FactoryBot.define do
  factory :manufacturer do
    name { |n| Faker::Lorem.word + n.to_s }
    association :company, strategy: :create
  end
end
