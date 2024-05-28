class Departments::FormDataSerializer < DepartmentSerializer
  belongs_to :location, serializer: Locations::OptionsSerializer, optional: true
  belongs_to :manager, serializer: People::OptionsSerializer, optional: true
end
