FactoryBot.define do
  factory :category do
    name { Category.first || Faker::Computer.type }
  end
end
