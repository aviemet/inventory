class Users::FlashSerializer < UserSerializer
  object_as :user

  attributes(
    :id,
    :active_company_id,
    table_preferences: { type: "UserTablePreferences" },
    user_preferences: { type: "UserPreferences" },
  )

  has_one :person, serializer: PersonSerializer

  has_many :roles, serializer: RoleSerializer
  has_many :people, serializer: PersonSerializer
  has_many :companies, serializer: Companies::OptionsSerializer

  belongs_to :active_company, serializer: Companies::OptionsSerializer
end
