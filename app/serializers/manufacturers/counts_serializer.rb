class Manufacturers::CountsSerializer < ManufacturerSerializer
  type "{
    models: number
    items: number
    accessories: number
    consumables: number
    components: number
  }"
  def counts
    {
      models: manufacturer&.models&.size || 0,
      items: manufacturer&.items&.size || 0,
      accessories: manufacturer&.accessories&.size || 0,
      consumables: manufacturer&.consumables&.size || 0,
      components: manufacturer&.components&.size || 0,
    }
  end
end
