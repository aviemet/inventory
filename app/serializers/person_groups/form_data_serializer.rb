class PersonGroups::FormDataSerializer < ApplicationSerializer
  object_as :person_group

  attributes(
     :id,
     :name,
     :description,
   )

end
