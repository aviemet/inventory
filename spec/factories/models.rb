FactoryBot.define do
  factory :model do
    name { Faker::Device.model_name }
    model_number { Faker::Device.serial }
    company

    category { association :category, company: company }
    manufacturer { association :manufacturer, company: company }
  end
end
