class Departments::FormDataSerializer < ApplicationSerializer
  object_as :department

  attributes(
     :name,
     :location_id,
     :notes,
   )
end
