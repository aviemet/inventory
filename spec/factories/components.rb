FactoryBot.define do
  factory :component do
    name { Faker::Device.model_name }
    qty { 1 }
    min_qty { 1 }
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
