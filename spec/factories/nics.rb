FactoryBot.define do
  factory :nic do
    mac { Faker::Internet.mac_address }
    item
  end
end
