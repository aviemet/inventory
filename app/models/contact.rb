class Contact < ApplicationRecord
	has_many :addresses
	has_many :emails
	has_many :phones
	
	belongs_to :contactable, polymorphic: true
end
