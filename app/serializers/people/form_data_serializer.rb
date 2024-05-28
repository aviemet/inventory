class People::FormDataSerializer < PersonSerializer
  class PersonUserFormDataSerializer < UserSerializer
  end

  has_one :contact, serializer: Contacts::FormDataSerializer, optional: true

  belongs_to :user, serializer: PersonUserFormDataSerializer, optional: true
  belongs_to :department, serializer: Departments::OptionsSerializer, optional: true
  belongs_to :manager, serializer: People::OptionsSerializer, optional: true
end
