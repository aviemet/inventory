# == Schema Information
#
# Table name: departments
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  notes       :text
#  slug        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  location_id :bigint
#  manager_id  :bigint
#
# Indexes
#
#  index_departments_on_location_id  (location_id)
#  index_departments_on_manager_id   (manager_id)
#  index_departments_on_slug         (slug) UNIQUE
#
# Foreign Keys
#
#  fk_rails_...  (location_id => locations.id)
#  fk_rails_...  (manager_id => people.id)
#
FactoryBot.define do
  factory :department do
    name { Faker::Commerce.unique.department(max: 1) }
    manager factory: :person
    company
    location { association :location, company: company }
  end
end
