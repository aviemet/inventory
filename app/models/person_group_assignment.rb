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
class PersonGroupAssignment < ApplicationRecord
  tracked
  resourcify

  belongs_to :person
  belongs_to :person_group
end
