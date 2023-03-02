class SpotlightBlueprint < ApplicationBlueprint
  association :items, blueprint: ItemBlueprint
  association :accessories, blueprint: AccessoryBlueprint
  association :components, blueprint: ComponentBlueprint
  association :consumables, blueprint: ConsumableBlueprint
  association :licenses, blueprint: LicenseBlueprint
  association :people, blueprint: PersonBlueprint
  association :tickets, blueprint: TicketBlueprint
  association :networks, blueprint: NetworkBlueprint
  association :vendors, blueprint: VendorBlueprint
  association :contracts, blueprint: ContractBlueprint
end
