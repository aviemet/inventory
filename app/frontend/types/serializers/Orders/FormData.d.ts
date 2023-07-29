// TypesFromSerializers CacheKey a6523901de2b755e5df990da58078646
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type VendorsOptions from '../Vendors/Options'

declare global {
  namespace Schema {
    interface OrdersFormData {
      id?: number
      canceled_at?: string | Date
      canceled_reason?: string
      created_at: string | Date
      delivered_at?: string | Date
      discount_cents?: number
      discount_currency: string
      discount_decription?: string
      expected_at?: string | Date
      notes?: string
      number?: string
      ordered_at?: string | Date
      returned_at?: string | Date
      returned_reason?: string
      shipping_cents?: number
      shipping_currency: string
      submitted_at?: string | Date
      tax_cents?: number
      tax_currency: string
      updated_at: string | Date
      user_id: number
      vendor?: VendorsOptions
      vendor_id: number
    }
  }
}
