FactoryBot.define do
  factory :category do
    name { Faker::Computer.type }
    categorizable_type { "Item" }

    transient do
      company { company || create(:company) }
    end
  end
end
