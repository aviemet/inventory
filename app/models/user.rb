class User < ApplicationRecord
  # Include default devise modules. Others available are:
  #  :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :confirmable

  belongs_to :person, optional: true

  has_secure_token :refresh_secret
  has_secure_token :user_secret

  validates :email, presence: true
  validates :person, presence: true

  before_validation :reference_person
  before_create :add_email_to_contact

  private

  # Before validation, create an associated Person if not present
  def reference_person
    self.person ||= Person.new
  end

  # Before create, add the new user's email to their contact card
  def add_email_to_contact
    if !self.person.contact.emails.exists?(:email => self.email)
      self.person.contact.emails << Email.create(email: self.email)
    end
  end

end
