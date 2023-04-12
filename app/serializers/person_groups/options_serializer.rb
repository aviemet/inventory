class PersonGroups::OptionsSerializer < ApplicationSerializer
  object_as :person_group

  attributes :id, :slug, :name
end
