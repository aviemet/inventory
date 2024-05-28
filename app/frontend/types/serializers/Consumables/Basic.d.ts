// TypesFromSerializers CacheKey 0e1e1253d8c4870e79b927258092dafd
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Money from '../../Money'
import type Category from '../Category'
import type Company from '../Company'
import type Manufacturer from '../Manufacturer'
import type Model from '../Model'
import type Vendor from '../Vendor'

declare global {
  namespace Schema {
    interface ConsumablesBasic {
      id: number
      category: Category
      company: Company
      cost: Money
      cost_currency: string
      created_at: string | Date
      default_location_id?: number
      manufacturer: Manufacturer
      min_qty?: number
      model: Model
      model_id: number
      name: string
      notes?: string
      qty?: number
      qty_available: number
      requestable: boolean
      updated_at: string | Date
      vendor: Vendor
      vendor_id?: number
    }
  }
}
