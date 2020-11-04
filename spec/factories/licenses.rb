FactoryBot.define do
  factory :license do
    name { Faker::Device.model_name }
    seats { Faker::Number.digit }
    key { Faker::Device.serial }
    licenser_name { Faker::Name.name }
    licenser_email { Faker::Internet.email }
    reassignable { true }
    cost { Faker::Number.decimal(l_digits: 2, r_digits: 2) }
    purchased_at { Date.yesterday }
    expires_at { Date.today.next_year }
    terminates_at { Date.today.next_year }
    notes { Faker::Lorem.sentence }
    association :license_category, factory: :license_category
    association :vendor, factory: :vendor
    association :manufacturer, factory: :manufacturer
    association :company, factory: :company
  end
end
