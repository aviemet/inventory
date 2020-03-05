module Types
	class DepartmentType < Types::BaseObject
		global_id_field :id
		field :name, String, null: false
		field :company, Types::CompanyType, null: false
		field :location, Types::LocationType, null: true
	end
end