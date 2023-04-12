class Users::EditSerializer < ApplicationSerializer
  object_as :user

  attributes(
    :id,
    :email,
    :active_company_id,
    :active,
  )

  has_many :people, serializer: PersonSerializer
  has_one :person, serializer: PersonSerializer
  has_many :companies, serializer: CompanySerializer
end
