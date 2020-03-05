module Types
  class AddressType < Types::BaseObject
    global_id_field :id
    field :address, String, null: false
    field :address_2, String, null: true
    field :city, String, null: true
    field :state, String, null: true
    field :zip, String, null: true
    field :notes, String, null: true
    field :type, String, null: true
  end
end
