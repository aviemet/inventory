// TypesFromSerializers CacheKey b1e09fc5f9fe982ff06a2af70437c15f
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Category from '../Category'
import type Contact from '../Contact'

declare global {
  namespace Schema {
    interface AddressesEdit {
      id: number
      address: string
      address_2?: string
      category: Category
      category_id: number
      city?: string
      contact: Contact
      contact_id: number
      country?: string
      notes?: string
      postal?: string
      region?: string
    }
  }
}
