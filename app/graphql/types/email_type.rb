module Types
  class EmailType < Types::BaseObject
    global_id_field :id
    field :email, String, null: false
    field :notes, String, null: true
    field :type, String, null: true
  end
end
