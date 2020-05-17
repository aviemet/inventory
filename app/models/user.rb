class User < ApplicationRecord
  # Include default devise modules. Others available are: , :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :confirmable, :lockable, :timeoutable, :trackable

  belongs_to :person, dependent: :destroy, optional: true
  has_many :user_companies, dependent: :destroy
  has_many :companies, through: :user_companies
  belongs_to :active_company, class_name: 'Company', optional: true

  validates :email, presence: true, uniqueness: true
  validates :email, length: { maximum: 255 }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }

  after_initialize :create_associated_person_record
  after_create :add_email_to_contact

  private

  def create_associated_person_record
    self.person ||= Person.new
  end

  def add_email_to_contact
    return if self.person.contact.emails.exists?(email: self.email)

    self.person.contact.emails << Email.create(email: self.email)
  end
end
