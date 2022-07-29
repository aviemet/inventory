FactoryBot.define do
  domain = Faker::Internet.domain_name

  factory :ldap do
    host { Faker::Internet.private_ip_v4_address }
    port { 389 }
    domain { domain }
    username { "administrator" }
    password { "Pa$$word" }
    tree_base { domain }
    association :company, strategy: :create
  end
end
