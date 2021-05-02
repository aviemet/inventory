FactoryBot.define do
  factory :assignment do
    assignable factory: :accessory
    assign_toable factory: :person
    active { true }
    qty { Faker::Number.digit }
    status { 1 }
    assigned_at { Time.current }
    active { true }
    created_by factory: :user
  end
end
