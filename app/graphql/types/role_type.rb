module Types
	class RoleType < Types::BaseObject
		global_id_field :id
		field :name, String, null: false
	end
end