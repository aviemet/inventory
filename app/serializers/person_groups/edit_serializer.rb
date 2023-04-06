class PersonGroups::EditSerializer < ApplicationSerializer
  object_as :person_group

  identifier :slug

  attributes :id,
             :name,
             :description

  attribute :permissions do
    person_group.roles.each_with_object({}) do |role, h|
      h[role.resource_type.downcase] ||= {}
      h[role.resource_type.downcase][role.name] = true
    end
  end
end
