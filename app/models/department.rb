class Department < ApplicationRecord
	include Contactable
	
	belongs_to :company
	belongs_to :location, optional: true
end
