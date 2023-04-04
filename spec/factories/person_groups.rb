FactoryBot.define do
  factory :person_group do
    name { Faker::Company.suffix }

    company
  end
end
