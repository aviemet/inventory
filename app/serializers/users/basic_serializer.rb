class Users::BasicSerializer < UserSerializer
  attributes(
    :id,
    :active_company_id,
    :created_at,
    :updated_at,
    table_preferences: { type: "UserTablePreferences" },
    user_preferences: { type: "UserPreferences" },
  )

  has_many :roles, serializer: RoleSerializer
  has_many :companies, serializer: Companies::OptionsSerializer
end
