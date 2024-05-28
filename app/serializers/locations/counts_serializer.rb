class Locations::CountsSerializer < LocationSerializer
  type "{
    items: number
    accessories: number
    consumables: number
    components: number
    licenses: number
    people: number
  }"
  def counts
    {
      items: location.items.size || 0,
      accessories: location.accessories.size || 0,
      consumables: location.consumables.size || 0,
      components: location.components.size || 0,
      licenses: location.licenses.size || 0,
      people: location.people.size || 0,
    }
  end
end
