class Company < ApplicationRecord
	has_many :departments, :dependent => :destroy_all
	has_many :locations, :dependent => :destroy_all
  has_many :user_companies, :dependent => :destroy_all
	has_many :users, :through => :user_companies
end
