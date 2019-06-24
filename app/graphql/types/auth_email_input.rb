module Types
	puts "auth_email_input"
	class AuthEmailInput < BaseInputObject
		argument :email, String, required: true
		argument :password, String, required: true
	end
	puts AuthEmailInput
end
