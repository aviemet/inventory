class PersonGroups::IndexSerializer < ApplicationSerializer
  object_as :person_group

  identifier :slug

  attributes(
    :id,
    :slug,
    :name,
    :description,
  )

  type "{
    [key: string]: Record<string, boolean>
  }"
  def permissions
    person_group.roles.each_with_object({}) do |role, h|
      h[role.resource_type.downcase] ||= {}
      h[role.resource_type.downcase][role.name] = true
    end
  end

  has_many :people, serializer: PersonSerializer
end
