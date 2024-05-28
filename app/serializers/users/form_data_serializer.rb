class Users::FormDataSerializer < UserSerializer
  object_as :user

  attributes(
    :active_company_id,
    :password,
    :password_confirmation,
  )

  has_one :person, serializer: PersonSerializer, optional: true

  has_many :people, serializer: PersonSerializer, optional: true
end
