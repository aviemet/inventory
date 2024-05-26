# == Schema Information
#
# Table name: person_groups
#
#  id          :bigint           not null, primary key
#  description :text
#  name        :string           not null
#  slug        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_person_groups_on_slug  (slug) UNIQUE
#
FactoryBot.define do
  factory :person_group do
    name { Faker::Company.suffix }

    company

    after(:stub, &:set_slug)
  end
end
