class Company < ApplicationRecord
	has_many :departments
	has_many :locations
  has_many :user_companies
	has_many :users, :through => :user_companies
end
