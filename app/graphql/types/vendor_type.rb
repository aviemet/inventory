module Types
  class VendorType < Types::BaseObject
    field :name, String, null: true
    field :url, String, null: true
    field :contact, Types::ContactType, null: true
  end
end
