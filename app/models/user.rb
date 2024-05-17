# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  active                 :boolean          default(TRUE)
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
class User < ApplicationRecord

  multisearchable(
    against: [:email],
    additional_attributes: ->(record) { { label: record.email } },
  )

  tracked except: [:reset_password_token, :remember_created_at, :sign_in_count, :last_sign_in_at, :last_sign_in_ip, :confirmation_token, :confirmed_at, :confirmation_sent_at, :unconfirmed_email, :unlock_token, :active_company]
  resourcify
  rolify

  # Include default devise modules. Others available are: , :omniauthable, :timeoutable,
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :confirmable, :lockable, :trackable, :invitable

  belongs_to :active_company, class_name: :Company, optional: true
  has_many :people, dependent: :nullify
  has_many :companies, through: :people

  has_one :person, dependent: :nullify do
    self.people.joins(:owner).find_by({ owner: { company: self.active_company } })
  end

  alias company active_company

  # store_accessor :table_preferences
  store_accessor :user_preferences, :dark_mode

  validates :email, presence: true, uniqueness: true
  validates :email, length: { maximum: 255 }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  password_complexity_regex = /\A(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,70}\z/
  validates :password, format: { with: password_complexity_regex }, on: [:create, :update], confirmation: true, if: :password
  # validates :password, presence: true, if: "id.nil?"

  before_save :coerce_json
  before_save :set_active_company

  # accepts_nested_attributes_for :person

  # jsonb_accessor :table_preferences, hide: :hash

  scope :includes_associated, -> { includes([:people, :companies]) }

  # Rows page for pagination
  def limit(model)
    self.table_preferences&.[](model.to_s)&.[]('limit')
  end

  private

  def set_active_company
    return if self.active_company

    self.active_company = self.person ? self.person.company : self.companies.first
  end

  def coerce_json
    self.dark_mode = ActiveModel::Type::Boolean.new.cast(self.dark_mode) if self.dark_mode
  end
end
