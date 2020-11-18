FactoryBot.define do
  factory :network do
    name { Faker::Name.name }
    ip { Faker::Internet.ip_v4_cidr }
    gateway { Faker::Internet.private_ip_v4_address }
    dhcp_start { Faker::Internet.private_ip_v4_address }
    dhcp_end { Faker::Internet.private_ip_v4_address }
    vlan_id { Faker::Number.number(digits: 2) }
    company
  end
end
