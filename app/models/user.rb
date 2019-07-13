class User < ApplicationRecord
  # Include default devise modules. Others available are:
  #  :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable, :confirmable

  belongs_to :person, optional: true

  has_secure_token :refresh_secret
  has_secure_token :user_secret

  validates :email, presence: true, uniqueness: true
  validates :person, presence: true
end
