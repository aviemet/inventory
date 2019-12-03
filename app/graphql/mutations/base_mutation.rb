module Mutations
	class BaseMutation < GraphQL::Schema::Mutation
		def hash_to_camel_case(input)
			Hash[input.to_h.map {|k, v| [k.to_s.underscore.to_sym, v]}]
		end
	end
end
