class PersonGroups::OptionsSerializer < ApplicationSerializer
  object_as :person_group

  attributes :id, :name
end
