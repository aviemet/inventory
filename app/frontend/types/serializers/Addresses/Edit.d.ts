// TypesFromSerializers CacheKey 76be43ed074181c0aca58b8b489a08c9
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type CategoriesOptions from '../Categories/Options'

declare global {
  namespace Schema {
    interface AddressesEdit {
      id: number
      address: string
      address_2?: string
      category: CategoriesOptions
      category_id: number
      city?: string
      contact_id: number
      country?: string
      notes?: string
      postal?: string
      region?: string
    }
  }
}