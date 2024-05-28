# == Schema Information
#
# Table name: locations
#
#  id         :bigint           not null, primary key
#  currency   :string
#  name       :string           not null
#  slug       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  parent_id  :bigint
#
# Indexes
#
#  index_locations_on_parent_id  (parent_id)
#  index_locations_on_slug       (slug) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (parent_id => locations.id)
#
FactoryBot.define do
  factory :location do
    name { Faker::Address.community }

    company

    after(:stub, &:set_slug)
  end
end
