# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  active                 :boolean          default(TRUE), not null
#  confirmation_sent_at   :datetime
#  confirmation_token     :string
#  confirmed_at           :datetime
#  current_sign_in_at     :datetime
#  current_sign_in_ip     :inet
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  failed_attempts        :integer          default(0), not null
#  invitation_accepted_at :datetime
#  invitation_created_at  :datetime
#  invitation_limit       :integer
#  invitation_sent_at     :datetime
#  invitation_token       :string
#  invitations_count      :integer          default(0)
#  invited_by_type        :string
#  last_sign_in_at        :datetime
#  last_sign_in_ip        :inet
#  locked_at              :datetime
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  sign_in_count          :integer          default(0), not null
#  table_preferences      :jsonb
#  unconfirmed_email      :string
#  unlock_token           :string
#  user_preferences       :jsonb
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  active_company_id      :bigint
#  invited_by_id          :bigint
#
# Indexes
#
#  index_users_on_active_company_id     (active_company_id)
#  index_users_on_confirmation_token    (confirmation_token) UNIQUE
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_invitation_token      (invitation_token) UNIQUE
#  index_users_on_invited_by            (invited_by_type,invited_by_id)
#  index_users_on_invited_by_id         (invited_by_id)
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_table_preferences     (table_preferences) USING gin
#  index_users_on_unlock_token          (unlock_token) UNIQUE
#  index_users_on_user_preferences      (user_preferences) USING gin
#
# Foreign Keys
#
#  fk_rails_...  (active_company_id => companies.id)
#
class UserSerializer < ApplicationSerializer
  object_as :user

  attributes(
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
    table_preferences: { type: "UserTablePreferences" },
    user_preferences: { type: "UserPreferences" },
  )

  has_many :roles, serializer: RoleSerializer
  has_many :activities, serializer: ActivitySerializer
  has_many :people, serializer: PersonSerializer
  has_one :person, serializer: PersonSerializer
  belongs_to :active_company, serializer: CompanySerializer
  has_many :companies, serializer: CompanySerializer
end
