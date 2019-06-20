class Contact < ApplicationRecord
	belongs_to :vendor
	belongs_to :person
	has_many :addresses
	has_many :emails
	has_many :phones
end
