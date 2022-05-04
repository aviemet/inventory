class User < ApplicationRecord
  rolify
  audited except: [:reset_password_token, :remember_created_at, :sign_in_count, :last_sign_in_at, :last_sign_in_ip, :confirmation_token, :confirmed_at, :confirmation_sent_at, :unconfirmed_email, :unlock_token, :active_company]

  # Include default devise modules. Others available are: , :omniauthable, :timeoutable,
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :confirmable, :lockable, :trackable

  belongs_to :person, dependent: :destroy, optional: true
  belongs_to :active_company, class_name: :Company, optional: true
  has_many :companies, through: :roles, source: :resource, source_type: "Company"

  # store_accessor :table_preferences
  store_accessor :user_preferences, :dark_mode

  validates :email, presence: true, uniqueness: true
  validates :email, length: { maximum: 255 }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  password_complexity_regex = /\A(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,70}\z/
  validates :password, presence: true, format: { with: password_complexity_regex }, on: [:create, :update], if: :password

  # after_create :add_email_to_contact

  before_save :coerce_json
 
  private

  def add_email_to_contact
    return if self.person.contact.emails.exists?(email: email)

    self.person.contact.emails << Email.create(email: email, category: Category.find_by_slug("email-work"))
  end

  def coerce_json
    self.dark_mode = ActiveModel::Type::Boolean.new.cast(self.dark_mode) if self.dark_mode
  end
end
