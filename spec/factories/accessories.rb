FactoryBot.define do
  factory :accessory do
    name { "MyString" }
    serial { "MyString" }
    notes { "MyText" }
    qty { 1 }
    vendor { nil }
    default_location { nil }
    accessory_category { nil }
    model_number { "MyString" }
    cost { "9.99" }
    min_qty { 1 }
  end
end
