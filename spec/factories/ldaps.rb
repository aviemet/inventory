FactoryBot.define do
  domain = Faker::Internet.domain_name

  factory :ldap do
    name { "Active Directory" }
    host { Faker::Internet.private_ip_v4_address }
    port { 389 }
    domain { domain }
    username { "administrator" }
    password { "Pa$$word" }
    tree_base { domain }
    company
  end
end
