FactoryBot.define do
  factory :consumable do
    name { "MyString" }
    model_number { "MyString" }
    min_qty { 1 }
    qty { 1 }
    cost { "9.99" }
    requestable { false }
    notes { "MyText" }
    manufacturer { nil }
    consumable_category { nil }
    vendor { nil }
    default_location { nil }
  end
end
