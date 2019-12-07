class User < ApplicationRecord
  # include Tokenizable

  belongs_to :person, :dependent => :destroy, optional: true
  has_many :user_companies, :dependent => :delete_all
  has_many :companies, :through => :user_companies

  validates :email, presence: true, uniqueness: true
  validates :email, length: { maximum: 255 }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  # Include default devise modules. Others available are:
  #  :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :confirmable

  has_secure_token :refresh_secret
  has_secure_token :user_secret

  after_initialize :setup_new_user, if: :new_record?
  after_create :add_email_to_contact

  private

  def setup_new_user
    self.person ||= Person.new
  end

  # Before create, add the new user's email to their contact card
  def add_email_to_contact
    if !self.person.contact.emails.exists?(:email => self.email)
      self.person.contact.emails << Email.create(email: self.email)
    end
  end

end
