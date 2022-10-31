FactoryBot.define do
  factory :model do
    name { Faker::Device.model_name }
    model_number { Faker::Device.serial }

    category
    manufacturer
    company
  end
end
