FactoryBot.define do
  factory :network do
    transient do
      subnet { 24 }
    end

    name { Faker::Name.name }
    address { "10.0.0.1/#{subnet}" }
    gateway { '10.0.0.1' }
    dhcp_start { '10.0.0.100' }
    dhcp_end { '10.0.0.254' }
    vlan_id { Faker::Number.number(digits: 2) }

    company
  end
end
