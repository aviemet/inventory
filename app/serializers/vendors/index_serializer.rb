class Vendors::IndexSerializer < ApplicationSerializer
  object_as :vendor

  identifier :slug

  attributes :id,
             :name,
             :url,
             :created_at,
             :updated_at

  has_one :contact, serializer: ContactSerializer
  has_many :activities, serializer: ActivitySerializer
  has_many :contracts, serializer: ContractSerializer
  has_many :items, serializer: ItemSerializer
  has_many :accessories, serializer: AccessorySerializer
  has_many :consumables, serializer: ConsumableSerializer
  has_many :components, serializer: ComponentSerializer
end
