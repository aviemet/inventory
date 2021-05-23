FactoryBot.define do
  factory :component do
    serial { "MyString" }
    category { nil }
    qty { 1 }
    min_qty { 1 }
    cost { "" }
    category { nil }
    manufacturer { nil }
    vendor { nil }
    default_location { nil }
  end
end
