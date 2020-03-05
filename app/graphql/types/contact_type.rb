module Types
  class ContactType < Types::BaseObject
    global_id_field :id
    field :name, String, null: true
    field :emails, [Types::EmailType], null: true
    field :phones, [Types::PhoneType], null: true
    field :addresses, [Types::AddressType], null:true
  end
end
