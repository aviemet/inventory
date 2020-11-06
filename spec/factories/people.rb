FactoryBot.define do
  factory :person do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    employee_number { Faker::Number.number }
    title { Faker::Job.title }
    active { true }
    company
  end
end
