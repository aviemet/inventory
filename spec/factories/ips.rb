FactoryBot.define do
  factory :ip do
    address { Faker::Internet.private_ip_v4_address }
  end
end
