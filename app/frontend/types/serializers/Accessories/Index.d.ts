// TypesFromSerializers CacheKey 47c5a102f9db22dd6b94e30f7eef5889
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Activity from '../Activity'
import type Assignment from '../Assignment'
import type Category from '../Category'
import type Company from '../Company'
import type Location from '../Location'
import type Department from '../Department'
import type DocumentationsIndex from '../Documentations/Index'
import type Manufacturer from '../Manufacturer'
import type Model from '../Model'
import type Purchase from '../Purchase'
import type StatusLabel from '../StatusLabel'
import type Vendor from '../Vendor'

declare global {
  namespace Schema {
    interface AccessoriesIndex {
      id: number
      activities: Activity[]
      asset_tag?: string
      assignments: Assignment[]
      category: Category
      company: Company
      cost: number
      cost_currency: string
      created_at: string | Date
      default_location: Location
      default_location_id?: number
      department: Department
      documentations: DocumentationsIndex[]
      manufacturer: Manufacturer
      min_qty?: number
      model: Model
      model_id: number
      name: string
      notes?: string
      purchase: Purchase
      purchased_at?: string | Date
      qty?: number
      qty_available: number
      requestable: boolean
      serial?: string
      status_label: StatusLabel
      status_label_id?: number
      updated_at: string | Date
      vendor: Vendor
      vendor_id?: number
    }
  }
}
