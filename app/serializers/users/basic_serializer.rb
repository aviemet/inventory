class Users::BasicSerializer < UserSerializer
  attributes(
    :id,
    :active_company_id,
    :created_at,
    :updated_at,
    table_preferences: { type: "UserTablePreferences" },
    user_preferences: { type: "UserPreferences" },
  )

  class ShowUserPersonSerializer < PersonSerializer
    belongs_to :company, serializer: Companies::OptionsSerializer
  end

  has_one :person, serializer: ShowUserPersonSerializer

  has_many :roles, serializer: RoleSerializer
  has_many :companies, serializer: Companies::OptionsSerializer

  belongs_to :active_company, serializer: Companies::OptionsSerializer
end
