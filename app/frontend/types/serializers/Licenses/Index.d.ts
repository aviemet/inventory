// TypesFromSerializers CacheKey 0da55d176f6463205e76d7edf227e185
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Category from '../Category'
import type Department from '../Department'
import type Manufacturer from '../Manufacturer'
import type Vendor from '../Vendor'

declare global {
  namespace Schema {
    interface LicensesIndex {
      id: number
      category: Category
      category_id: number
      cost: number
      cost_currency: string
      created_at: string | Date
      department: Department
      expires_at?: string | Date
      key?: string
      licenser_email?: string
      licenser_name?: string
      maintained: boolean
      manufacturer: Manufacturer
      manufacturer_id: number
      name: string
      notes?: string
      purchased_at?: string | Date
      qty?: number
      qty_available: number
      reassignable: boolean
      status_label_id?: number
      terminates_at?: string | Date
      updated_at: string | Date
      vendor: Vendor
      vendor_id?: number
    }
  }
}
