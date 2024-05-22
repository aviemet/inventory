class Users::AuthSerializer < UserSerializer
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
    :active,
    :active_company_id,
  )

  has_one :person, serializer: PersonSerializer

  has_many :people, serializer: PersonSerializer
  has_many :roles, serializer: RoleSerializer
  has_many :companies, serializer: Companies::OptionsSerializer

  belongs_to :active_company, serializer: Companies::OptionsSerializer
end
