// TypesFromSerializers CacheKey 2db0ff068ad8bd7db086c084a2dda8f6
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Accessory from '../Accessory'
import type Activity from '../Activity'
import type Component from '../Component'
import type Consumable from '../Consumable'
import type Item from '../Item'
import type License from '../License'
import type Location from '../Location'
import type Person from '../Person'

declare global {
  namespace Schema {
    interface DepartmentsShow {
      id: number
      accessories: Accessory[]
      activities: Activity[]
      components: Component[]
      consumables: Consumable[]
      counts: {
    items: number
    accessories: number
    consumables: number
    components: number
    licenses: number
    contracts: number
    people: number
  }
      created_at: string | Date
      items: Item[]
      licenses: License[]
      location: Location
      location_id?: number
      manager_id?: number
      name: string
      notes?: string
      people: Person[]
      slug: string
      updated_at: string | Date
    }
  }
}
