class User < ApplicationRecord
  rolify
  # Include default devise modules. Others available are: , :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :confirmable, :lockable, :timeoutable, :trackable

  belongs_to :person, dependent: :destroy, optional: true
  belongs_to :active_company, class_name: 'Company', optional: true

  validates :email, presence: true, uniqueness: true
  validates :email, length: { maximum: 255 }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  before_create :create_associated_person_record
  after_create :add_email_to_contact

  private

  def create_associated_person_record
    self.person ||= Person.create
  end

  def add_email_to_contact
    return if self.person.contact.emails.exists?(email: email)

    self.person.contact.emails << Email.create(email: email)
  end
end
