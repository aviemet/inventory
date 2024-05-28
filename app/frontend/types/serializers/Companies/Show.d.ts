// TypesFromSerializers CacheKey c2e8116d07c40de31a1ffcd3d507492a
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type ContactsBasic from '../Contacts/Basic'

declare global {
  namespace Schema {
    interface CompaniesShow {
      id: number
      contact: ContactsBasic
      counts: {
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
  }
      created_at: string | Date
      default_currency: string
      name: string
      settings: Record<string, string>
      slug: string
      updated_at: string | Date
    }
  }
}
