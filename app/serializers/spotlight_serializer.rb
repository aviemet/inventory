class SpotlightSerializer < ApplicationSerializer
  has_many :items, serializer: ItemSerializer
  has_many :accessories, serializer: AccessorySerializer
  has_many :components, serializer: ComponentSerializer
  has_many :consumables, serializer: ConsumableSerializer
  has_many :licenses, serializer: LicenseSerializer
  has_many :people, serializer: PersonSerializer
  has_many :tickets, serializer: TicketSerializer
  has_many :networks, serializer: NetworkSerializer
  has_many :vendors, serializer: VendorSerializer
  has_many :contracts, serializer: ContractSerializer
end
