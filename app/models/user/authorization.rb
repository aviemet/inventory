class User::Authorization < ActiveType::Record[User]

  def authenticate(password)
    is_valid_for_auth = self.valid_for_authentication?{
      self.valid_password?(password)
    }
	end
	
end