FactoryBot.define do
  factory :vendor do
    name { Faker::Company.name }
    url { Faker::Internet.url }

    transient do
      company { company || create(:company) }
    end
  end
end
