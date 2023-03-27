FactoryBot.define do
  factory :item do
    name { Faker::Device.model_name }
    cost { Faker::Commerce.price(range: 500..2000.0) }
    purchased_at { Time.zone.yesterday.end_of_day }
    status_label

    company
    model { association :model, company: company }
    vendor { association :vendor, company: company }
    manufacturer { association :manufacturer, company: company }
    category { association :category, company: company }
  end
end
