class Departments::EditSerializer < ApplicationSerializer
  object_as :department

  attributes :name,
             :slug,
             :location_id,
             :notes

end
