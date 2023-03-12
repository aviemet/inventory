FactoryBot.define do
  factory :license do
    name { Faker::Device.model_name }
    qty { 1 }
    key { Faker::Device.serial }
    licenser_name { Faker::Name.name }
    licenser_email { Faker::Internet.email }
    reassignable { true }
    cost { Faker::Number.decimal(l_digits: 2, r_digits: 2) }
    purchased_at { Time.zone.yesterday.end_of_day }
    expires_at { Time.current.next_year }
    terminates_at { Time.current.next_year }
    notes { Faker::Lorem.sentence }
    manufacturer
    status_label
    category
    vendor
    company
  end
end
