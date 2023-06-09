FactoryBot.define do
  factory :smtp do
    transient do
      email_domain { Faker::Internet.domain_name }
    end

    name { "Service Name" }
    host { "smtp.#{email_domain}" }
    port { 587 }
    security { :tls }
    domain { email_domain }
    username { Faker::Internet.username }
    password { Faker::Internet.password }

    company
  end
end
