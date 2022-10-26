FactoryBot.define do
  factory :nic do
    mac { Faker::Internet.mac_address }
    nic_type { ["ethernet","wifi"].sample }
    item
  end
end
