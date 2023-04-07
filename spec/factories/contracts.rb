FactoryBot.define do
  factory :contract do
    name { Faker::Name.name }

    company
    vendor { association :vendor, company: company }
    category { association :category, company: company }
  end
end
