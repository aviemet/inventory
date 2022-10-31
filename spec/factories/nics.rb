FactoryBot.define do
  factory :nic do
    nic_type { ["ethernet","wifi"].sample }
    item

    trait :mac do
      mac { Faker::Internet.mac_address }
    end
  end
end
