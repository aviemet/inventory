# == Schema Information
#
# Table name: manufacturers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  slug       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_manufacturers_on_name  (name) UNIQUE
#  index_manufacturers_on_slug  (slug) UNIQUE
#
FactoryBot.define do
  factory :manufacturer do
    name { Faker::Lorem.unique.word }

    company

    after(:stub, &:set_slug)
  end
end
