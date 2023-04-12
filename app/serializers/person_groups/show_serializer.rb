class PersonGroups::ShowSerializer < ApplicationSerializer
  object_as :person_group

  identifier :slug

  attributes(
     :id,
     :slug,
     :name,
     :description,
     :created_at,
     :updated_at,
   )

  has_many :people, serializer: PersonSerializer
end
