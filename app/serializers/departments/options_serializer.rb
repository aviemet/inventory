class Departments::OptionsSerializer < ApplicationSerializer
  object_as :department

  attributes :name
end
