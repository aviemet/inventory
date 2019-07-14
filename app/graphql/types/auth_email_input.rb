module Types
	class AuthEmailInput < Types::BaseInputObject
		argument :email, String, required: true
		argument :password, String, required: true
	end
end
