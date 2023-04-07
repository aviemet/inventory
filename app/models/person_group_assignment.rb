class PersonGroupAssignment < ApplicationRecord
  tracked
  resourcify

  belongs_to :person
  belongs_to :person_group
end
