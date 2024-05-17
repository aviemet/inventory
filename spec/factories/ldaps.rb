# == Schema Information
#
# Table name: ldaps
#
#  id            :bigint           not null, primary key
#  domain        :string
#  host          :string
#  name          :string           not null
#  password      :string
#  port          :string
#  sync_interval :string
#  tree_base     :string
#  user_search   :string
#  username      :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  company_id    :bigint           not null
#
# Indexes
#
#  index_ldaps_on_company_id  (company_id)
#
# Foreign Keys
#
#  fk_rails_...  (company_id => companies.id)
#
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
