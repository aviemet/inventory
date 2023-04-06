class UserSerializer < ApplicationSerializer
  object_as :user

  attributes :email,
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
             :table_preferences,
             :user_preferences
         # :password,
         # :reset_password_token,
         # :confirmation_token,
         # :unlock_token,

  # view :associations do
  #   has_many :roles, serializer: RoleSerializer
  #   has_many :activities, serializer: ActivitySerializer
  #   has_many :people, serializer: PersonSerializer
  #   belongs_to :active_company, serializer: CompanySerializer
  #   has_many :companies, serializer: CompanySerializer
  # end

  # view :as_form_data do
  #   only :id,
  #        :email,
  #        :active
  # end

  # view :shared do
  #   include_view :associations
  # end
end
