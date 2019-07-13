class User::AsLogin < User
	attr_accessor :email
	attr_accessor :password

	validate :validate_user_exists
	validate :validate_password_correct

	def authenticate
		# find user by email
		# verify password
		# generate auth token
		# generate refresh token
		puts password
	end

	private

	def validate_user_exists
		if user.blank?
			errors.add(:user_id, 'User not found')
		end
	end

	def validate_password_correct
		if user && !user.has_password?(password)
			errors.add(:password, 'Incorrect password')
		end
	end

	def issue_auth_token

	end

	def issue_refresh_token

	end

end