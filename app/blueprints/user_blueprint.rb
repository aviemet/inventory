class UserBlueprint < ApplicationBlueprint
  fields :email,
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
         :person_id,
         :active_company_id,
         :active,
         :table_preferences,
         :user_preferences
         # :password,
         # :reset_password_token,
         # :confirmation_token,
         # :unlock_token,

  view :associations do
    association :roles, blueprint: RoleBlueprint
    association :activities, blueprint: ActivityBlueprint
    association :person, blueprint: PersonBlueprint
    association :active_company, blueprint: CompanyBlueprint
    association :companies, blueprint: CompanyBlueprint
  end

  view :shared do
    include_view :associations
  end
end
