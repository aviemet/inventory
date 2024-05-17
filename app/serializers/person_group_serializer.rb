# == Schema Information
#
# Table name: person_groups
#
#  id          :bigint           not null, primary key
#  description :text
#  name        :string
#  slug        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_person_groups_on_slug  (slug) UNIQUE
#
class PersonGroupSerializer < ApplicationSerializer
  object_as :person_group

  identifier :slug

  attributes(
    :id,
    :name,
    :description,
    :created_at,
    :updated_at,
  )
end
