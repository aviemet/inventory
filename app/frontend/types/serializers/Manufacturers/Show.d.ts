// TypesFromSerializers CacheKey b562864237829aaca8de8dcd474d8d2a
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Contact from '../Contact'

declare global {
  namespace Schema {
    interface ManufacturersShow {
      id: number
      contact: Contact
      counts: {
    models: number
    items: number
    accessories: number
    consumables: number
    components: number
  }
      created_at: string | Date
      name: string
      slug: string
      updated_at: string | Date
    }
  }
}
