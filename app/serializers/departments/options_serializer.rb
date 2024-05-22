class Departments::OptionsSerializer < ApplicationSerializer
  object_as :department

  identifier :slug

  attributes :id, :slug, :name
end
