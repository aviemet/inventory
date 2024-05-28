class Assignments::FormDataSerializer < AssignmentSerializer
  belongs_to :created_by, serializer: People::ShowSerializer
end
