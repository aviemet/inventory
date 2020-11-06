FactoryBot.define do
  factory :manufacturer do
    name { Faker::Device.manufacturer }
    company
  end
end
