// TypesFromSerializers CacheKey d1b9d583faa494ae2ef05e4a04cca7ad
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
export {}

declare global {
  namespace Schema {
    interface DepartmentsCounts {
      id?: number
      slug?: string
      counts: {
    items: number
    accessories: number
    consumables: number
    components: number
    licenses: number
    contracts: number
    people: number
  }
      location_id?: number
      manager_id?: number
      name: string
      notes?: string
    }
  }
}