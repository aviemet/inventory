# == Schema Information
#
# Table name: networks
#
#  id         :bigint           not null, primary key
#  address    :cidr
#  dhcp_end   :inet
#  dhcp_start :inet
#  gateway    :inet
#  name       :string
#  notes      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  vlan_id    :integer
#
FactoryBot.define do
  factory :network do
    transient do
      subnet { 24 }
      network_address { Faker::Internet.private_ip_v4_address }
      dhcp { true }
    end

    name { Faker::DcComics.hero }
    address { "#{network_address}/#{subnet}" }
    vlan_id { Faker::Number.number(digits: 2) }

    company

    after(:build) do |network, evaluator|
      if network.address && network.address.prefix < 32
        subnet = network.address.prefix

        addr = IPAddress "#{network.address}/#{subnet}"

        network.address = addr.network
        network.gateway = addr.first if network.gateway.nil?

        if evaluator.dhcp
          dhcp_start = addr.split(2).last.network
          dhcp_start.prefix = subnet
          network.dhcp_start = dhcp_start
          network.dhcp_end = addr.last
        end
      end
    end

  end
end
