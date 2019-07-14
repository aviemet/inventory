class JsonWebToken
	class << self

		def encode(payload: {}, exp: 24.hours.from_now, salt: '')
			payload[:exp] = exp.to_i
			salt += Rails.application.secrets.secret_key_base
			JWT.encode(payload, salt)
		end

		def decode(token, salt: '')
			salt += Rails.application.secrets.secret_key_base
			return HashWithIndifferentAccess.new(JWT.decode(token, salt)[0])
		rescue
			nil
		end
		
	end
end