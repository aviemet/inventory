class Companies::CountsSerializer < CompanySerializer
  type "{
    locations: number
    items: number
    accessories: number
    consumables: number
    components: number
    departments: number
    licenses: number
    contracts: number
    people: number
    vendors: number
    manufacturers: number
  }"
  def counts
    {
      locations: company.locations.size || 0,
      items: company.items.size || 0,
      accessories: company.accessories.size || 0,
      consumables: company.consumables.size || 0,
      components: company.components.size || 0,
      departments: company.departments.size || 0,
      licenses: company.licenses.size || 0,
      contracts: company.contracts.size || 0,
      people: company.people.size || 0,
      vendors: company.vendors.size || 0,
      manufacturers: company.manufacturers.size || 0,
    }
  end
end
