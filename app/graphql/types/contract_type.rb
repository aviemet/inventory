module Types
  class ContractType < Types::BaseObject
    global_id_field :id
    field :system, String, null: true
    field :description, String, null: true
    field :notes, String, null: true

    field :type, Types::ContractTypeType, hash_key: :contract_types, null: true
    field :vendor, Types::VendorType, null: true
  end
end
