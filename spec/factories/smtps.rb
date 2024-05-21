# == Schema Information
#
# Table name: smtps
#
#  id         :bigint           not null, primary key
#  address    :string
#  domain     :string
#  host       :string           not null
#  name       :string           not null
#  notes      :text
#  password   :string
#  port       :integer
#  security   :integer          default("plain")
#  username   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
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
