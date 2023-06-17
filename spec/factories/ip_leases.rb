FactoryBot.define do
  factory :ip_lease do
    address { Faker::Internet.private_ip_v4_address }
    active { true }
    nic
  end
end
