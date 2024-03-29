// TypesFromSerializers CacheKey 0b9d8c0edf9ede17be635ced760fbfc1
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Category from '../Category'
import type Department from '../Department'
import type Manufacturer from '../Manufacturer'
import type Model from '../Model'
import type Vendor from '../Vendor'

declare global {
  namespace Schema {
    interface ComponentsIndex {
      id?: number
      asset_tag?: string
      category: Category
      cost: number
      cost_currency: string
      created_at: string | Date
      default_location_id?: number
      department: Department
      manufacturer: Manufacturer
      min_qty?: number
      model: Model
      model_id: number
      name: string
      notes?: string
      purchased_at?: string | Date
      qty?: number
      qty_available: number
      serial?: string
      updated_at: string | Date
      vendor: Vendor
      vendor_id?: number
    }
  }
}
