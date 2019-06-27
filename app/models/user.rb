class User < ApplicationRecord
  # Include default devise modules. Others available are:
  #  :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :confirmable

  belongs_to :person, optional: true

  has_secure_token :refresh_secret
  has_secure_token :user_secret

  before_save :reference_person

  private

  def reference_person
    person = Person.create!
    self.person = person

    email = Email.find_by_email(self.email)
    if email.present?
      email = Email.create(email: self.email, contact: contact)
    end
  end
end
