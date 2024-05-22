class Vendors::CountsSerializer < VendorSerializer
  type "{
    items: number
    accessories: number
    consumables: number
    components: number
    licenses: number
    contracts: number
  }"
  def counts
    {
      items: vendor.items.size,
      accessories: vendor.accessories.size,
      consumables: vendor.consumables.size,
      components: vendor.components.size,
      licenses: vendor.licenses.size,
      contracts: vendor.contracts.size,
    }
  end
end
