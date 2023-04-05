class Departments::ShowSerializer < ApplicationSerializer
  object_as :department

  attributes :name
end
