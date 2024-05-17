# == Schema Information
#
# Table name: person_group_assignments
#
#  id              :bigint           not null, primary key
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  person_group_id :bigint           not null
#  person_id       :bigint           not null
#
# Indexes
#
#  index_person_group_assignments_on_person_group_id  (person_group_id)
#  index_person_group_assignments_on_person_id        (person_id)
#
# Foreign Keys
#
#  fk_rails_...  (person_group_id => person_groups.id)
#  fk_rails_...  (person_id => people.id)
#
FactoryBot.define do
  factory :person_group_assignment do
    person { nil }
    person_group { nil }
  end
end
