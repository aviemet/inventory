FactoryBot.define do
  factory :assignment do
    assignable factory: :accessory
    assign_toable factory: :person
    active { true }
  end
end
