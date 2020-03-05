module Types
  class PhoneType < Types::BaseObject
    global_id_field :id
    field :number, String, null: false
    field :extenstion, String, null: true
    field :notes, String, null: true
    field :type, String, null: true
  end
end
