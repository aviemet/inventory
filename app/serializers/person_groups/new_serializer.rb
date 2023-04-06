class PersonGroups::NewSerializer < ApplicationSerializer
  object_as :person_group

  attributes(
     :id,
     :name,
     :description,
   )

end
