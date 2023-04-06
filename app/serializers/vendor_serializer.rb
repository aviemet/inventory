class VendorSerializer < ApplicationSerializer
  object_as :vendor

  identifier :slug

  attributes :id,
             :name,
             :url,
             :created_at,
             :updated_at

  # view :associations do
  #   has_one :contact, serializer: ContactSerializer
  #   has_many :activities, serializer: ActivitySerializer
  #   has_many :contracts, serializer: ContractSerializer
  #   has_many :items, serializer: ItemSerializer
  #   has_many :accessories, serializer: AccessorySerializer
  #   has_many :consumables, serializer: ConsumableSerializer
  #   has_many :components, serializer: ComponentSerializer
  # end

  # view :as_options do
  #   only :id, :name
  # end

  # view :show_page do
  #   attribute :items_count do |vendor|
  #     vendor.items.size
  #   end

  #   attribute :accessories_count do |vendor|
  #     vendor.accessories.size
  #   end

  #   attribute :consumables_count do |vendor|
  #     vendor.consumables.size
  #   end

  #   attribute :components_count do |vendor|
  #     vendor.components.size
  #   end

  #   attribute :licenses_count do |vendor|
  #     vendor.licenses.size
  #   end

  #   attribute :contracts_count do |vendor|
  #     vendor.contracts.size
  #   end

  #   association :contact, serializer: ContactSerializer
  #   association :contracts, serializer: ContractSerializer
  # end

end
