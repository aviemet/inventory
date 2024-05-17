# == Schema Information
#
# Table name: vendors
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  slug       :string           not null
#  url        :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_vendors_on_slug  (slug) UNIQUE
#
FactoryBot.define do
  factory :vendor do
    name { Faker::Company.name }

    company
  end
end
