module Types
	class AuthEmailInput < BaseInputObject
		argument :email, String, required: true
		argument :password, String, required: true
	end
end
