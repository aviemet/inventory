class JsonWebToken
	class << self

		def encode(payload: {}, exp: 24.hours.from_now, salt: '')
			payload[:exp] = exp.to_i
			salt += Rails.application.secrets.secret_key_base
			JWT.encode(payload, salt, 'HS256', { typ: 'JWT' })
		end

		def decode(token, salt: '')
			salt += Rails.application.secrets.secret_key_base
			return HashWithIndifferentAccess.new(JWT.decode(token, salt, true, { algorithm: 'HS256' })[0])
		rescue
			nil
		end
		
	end
end