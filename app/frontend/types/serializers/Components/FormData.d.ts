// TypesFromSerializers CacheKey 149f62857d053bbd003ebab80e362cb9
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type ModelsOptions from '../Models/Options'
import type StatusLabelsOptions from '../StatusLabels/Options'
import type VendorsOptions from '../Vendors/Options'

declare global {
  namespace Schema {
    interface ComponentsFormData {
      id: number
      asset_tag?: string
      cost: number
      cost_currency: string
      created_at: string | Date
      default_location_id?: number
      min_qty?: number
      model: ModelsOptions
      model_id: number
      name: string
      notes?: string
      purchased_at?: string | Date
      qty?: number
      qty_available: number
      requestable: boolean
      serial?: string
      status_label: StatusLabelsOptions
      status_label_id?: number
      updated_at: string | Date
      vendor: VendorsOptions
      vendor_id?: number
    }
  }
}
