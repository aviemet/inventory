class Users::IndexSerializer < UserSerializer
  attributes(
    :id,
    :active_company_id,
    :created_at,
    :updated_at,
    table_preferences: { type: "UserTablePreferences" },
    user_preferences: { type: "UserPreferences" },
  )

  has_one :person, serializer: PersonSerializer

  has_many :people, serializer: PersonSerializer
  has_many :roles, serializer: RoleSerializer
  has_many :activities, serializer: ActivitySerializer
  has_many :companies, serializer: CompanySerializer

  belongs_to :active_company, serializer: CompanySerializer
end
