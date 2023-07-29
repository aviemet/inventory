// TypesFromSerializers CacheKey ff5b003086a2138fdb50f088ad90a8da
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type CategoriesOptions from '../Categories/Options'
import type VendorsOptions from '../Vendors/Options'

declare global {
  namespace Schema {
    interface ContractsEdit {
      id: number
      begins_at?: string | Date
      category: CategoriesOptions
      category_id: number
      ends_at?: string | Date
      name: string
      notes?: string
      number?: string
      slug: string
      vendor: VendorsOptions
      vendor_id: number
    }
  }
}
