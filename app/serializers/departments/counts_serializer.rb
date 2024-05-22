class Departments::CountsSerializer < DepartmentSerializer
  type "{
    items: number
    accessories: number
    consumables: number
    components: number
    licenses: number
    contracts: number
    people: number
  }"
  def counts
    {
      items: department&.items&.size || 0,
      accessories: department&.accessories&.size || 0,
      consumables: department&.consumables&.size || 0,
      components: department&.components&.size || 0,
      licenses: department&.licenses&.size || 0,
      contracts: department&.contracts&.size || 0,
      people: department&.people&.size || 0,
    }
  end
end
