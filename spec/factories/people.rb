# == Schema Information
#
# Table name: people
#
#  id              :bigint           not null, primary key
#  active          :boolean          default(TRUE), not null
#  employee_number :string
#  first_name      :string
#  guid            :string
#  job_title       :string
#  last_name       :string
#  middle_name     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  location_id     :bigint
#  manager_id      :bigint
#  user_id         :bigint
#
# Indexes
#
#  index_people_on_guid         (guid) UNIQUE
#  index_people_on_location_id  (location_id)
#  index_people_on_manager_id   (manager_id)
#  index_people_on_user_id      (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (location_id => locations.id)
#  fk_rails_...  (manager_id => people.id)
#  fk_rails_...  (user_id => users.id)
#
FactoryBot.define do
  factory :person do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    employee_number { Faker::Number.number }
    job_title { Faker::Job.title }
    active { true }

    company
    location { association :location, company: company }
  end
end
