FactoryBot.define do
  factory :company do
    name { Faker::Company.unique.name }

    factory :company_as_setup, class: Company::AsSetup
  end
end
