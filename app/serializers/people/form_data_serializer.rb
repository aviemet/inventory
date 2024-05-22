class People::FormDataSerializer < PersonSerializer
  has_one :contact, serializer: Contacts::FormDataSerializer, optional: true

  belongs_to :user, serializer: Users::FormDataSerializer, optional: true
  belongs_to :department, serializer: Departments::FormDataSerializer, optional: true
  belongs_to :manager, serializer: People::OptionsSerializer, optional: true
end
