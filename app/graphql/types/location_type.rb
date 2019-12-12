module Types
  class LocationType < Types::BaseObject
    global_id_field :id
    field :name, String, null: false
    field :parent, Types::LocationType, null: true
		field :company, Types::CompanyType, null: false
  end
end
