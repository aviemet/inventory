class Users::ShowSerializer < ApplicationSerializer
  object_as :user

  attributes(
    :id,
    :email,
    :reset_password_sent_at,
    :remember_created_at,
    :sign_in_count,
    :current_sign_in_at,
    :last_sign_in_at,
    :current_sign_in_ip,
    :last_sign_in_ip,
    :confirmed_at,
    :confirmation_sent_at,
    :unconfirmed_email,
    :failed_attempts,
    :locked_at,
    :created_at,
    :updated_at,
    :active_company_id,
    :active,
    table_preferences: { type: "IUserTablePreferences" },
    user_preferences: { type: "IUserPreferences" },
  )

  has_many :roles, serializer: RoleSerializer
  has_many :activities, serializer: ActivitySerializer
  belongs_to :active_company, serializer: Companies::OptionsSerializer
  has_many :companies, serializer: Companies::OptionsSerializer

  class ShowUserPersonSerializer < PersonSerializer
    belongs_to :company, serializer: Companies::OptionsSerializer
  end

  has_many :people, serializer: ShowUserPersonSerializer
  has_one :person, serializer: ShowUserPersonSerializer
end
