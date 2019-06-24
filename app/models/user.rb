class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_one :person

  has_secure_token :refresh_secret
  has_secure_token :user_secret

  before_save :reference_person

  private

  def reference_person
    email = Email.find_by_email(self.email)
    # If email is empty we need to go up the chain creating a contact, an email and a person
    if email.blank?
      contact = Contact.create!
      email = Email.create!(email: self.email, contact: contact)
      person = Person.create!(contact: contact)
    end
  end
end
