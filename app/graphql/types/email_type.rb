module Types
  class EmailType < Types::BaseObject
    field :email, String, null: false
    field :notes, String, null: true
    field :type, String, null: true
  end
end
