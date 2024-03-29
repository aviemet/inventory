// TypesFromSerializers CacheKey 425434388fba7516f177a6ad9bfaea59
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
      terminates_at?: string | Date
      updated_at: string | Date
      vendor: Vendor
      vendor_id?: number
    }
  }
}
