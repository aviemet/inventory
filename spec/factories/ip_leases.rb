FactoryBot.define do
  factory :ip_lease do
    nic { nic }
    address { Faker::Internet.private_ip_v4_address }
    active { true }
  end
end
