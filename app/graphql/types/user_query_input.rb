module Types
	class UserQueryInput < Types::BaseInputObject
		argument :id, ID, required: false
		argument :email, String, required: false
	end
end
