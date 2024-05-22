class Users::FormDataSerializer < UserSerializer
  object_as :user

  attributes(
    :active_company_id,
    :password,
    :password_confirmation,
  )

  has_one :person, serializer: PersonSerializer

  has_many :people, serializer: PersonSerializer
  has_many :companies, serializer: CompanySerializer
end
