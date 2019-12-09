class Company < ApplicationRecord
	has_many :departments, :dependent => :destroy
	has_many :locations, :dependent => :destroy
  has_many :user_companies, :dependent => :destroy
	has_many :users, :through => :user_companies
end
