FactoryBot.define do
  factory :manufacturer do
    name { |n| Faker::Lorem.word + n.to_s }

    transient do
      company { company || create(:company) }
    end
  end
end
