// TypesFromSerializers CacheKey 1b52a5de8d5e0f21250089143c50e6a6
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Contact from '../Contact'
import type Department from '../Department'
import type Location from '../Location'

declare global {
  namespace Schema {
    interface LocationsIndex {
      id: number
      contact: Contact
      counts: {
    items: number
    accessories: number
    consumables: number
    components: number
    licenses: number
    people: number
  }
      created_at: string | Date
      currency?: string
      department: Department
      location: Location
      name: string
      parent: Location
      parent_id?: number
      slug: string
      updated_at: string | Date
    }
  }
}
