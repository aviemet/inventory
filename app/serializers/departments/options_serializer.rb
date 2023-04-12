class Departments::OptionsSerializer < ApplicationSerializer
  object_as :department

  attributes :id, :name
end
