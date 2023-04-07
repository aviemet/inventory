FactoryBot.define do
  factory :consumable do
    name { Faker::Device.model_name }
    min_qty { 1 }
    qty { Faker::Number.non_zero_digit }
    cost { Faker::Number.decimal(l_digits: 2, r_digits: 2) }

    company
    model { association :model, company: company }
    vendor { association :vendor, company: company }
    manufacturer { association :manufacturer, company: company }
    category { association :category, company: company }
  end
end
