# == Schema Information
#
# Table name: categories
#
#  id                 :bigint           not null, primary key
#  categorizable_type :string           not null
#  description        :text
#  name               :string
#  slug               :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
# Indexes
#
#  index_categories_on_slug  (slug) UNIQUE
#
FactoryBot.define do
  factory :category do
    name { Faker::Computer.type }
    categorizable_type { "Item" }

    company
  end
end
