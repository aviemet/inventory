module Types
  class ItemCategoryType < Types::BaseObject
    global_id_field :id
    field :name, String, null: true
  end
end
