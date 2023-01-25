FactoryBot.define do
  domain = Faker::Internet.domain_name

  factory :smtp do
    address { "smtp.#{domain}" }
    port { 587 }
    domain { domain }
    auth { "plain" }
    tls { false }
    username { Faker::Internet.username }
    password { Faker::Internet.password }
  end
end
