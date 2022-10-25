FactoryBot.define do
  factory :category do
    name { Faker::Computer.type }
    categorizable_type { "Item" }

    company
  end
end
