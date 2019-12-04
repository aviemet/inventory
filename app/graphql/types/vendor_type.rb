module Types
  class VendorType < Types::BaseObject
    field :name, Types::StringType, null: true
    field :url, Types::StringType, null: true
    field :contact, Types::ContactType, null: true
  end
end
