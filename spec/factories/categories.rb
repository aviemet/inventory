# == Schema Information
#
# Table name: categories
#
#  id                 :bigint           not null, primary key
#  categorizable_type :string           not null
#  description        :text
#  name               :string           not null
#  slug               :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
# Indexes
#
#  index_categories_on_name_and_categorizable_type  (name,categorizable_type) UNIQUE
#  index_categories_on_slug                         (slug) UNIQUE
#
FactoryBot.define do
  factory :category do
    sequence(:name) { |n| "#{Faker::Computer.type}#{n}" }
    categorizable_type { "Item" }

    company

    after(:stub, &:set_slug)
  end
end
