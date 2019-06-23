module Types
	class UserQueryInput < BaseInputObject
		argument :id, ID, required: false
		argument :email, String, required: false
	end
end
