module Types
  class BrandType < Types::BaseObject
    global_id_field :id
    field :name, String, null: true
  end
end
