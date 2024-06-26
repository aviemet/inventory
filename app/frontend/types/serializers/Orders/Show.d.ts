// TypesFromSerializers CacheKey 4d17afaf9e28b6fefcf55c3848b33bd4
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Money from '../../Money'
import type PeopleBasic from '../People/Basic'
import type PurchasesBasic from '../Purchases/Basic'
import type VendorsOptions from '../Vendors/Options'

declare global {
  namespace Schema {
    interface OrdersShow {
      id: number
      canceled_at?: string | Date
      canceled_reason?: string
      cost: Money
      created_at: string | Date
      delivered_at?: string | Date
      discount_cost: Money
      discount_decription?: string
      expected_at?: string | Date
      notes?: string
      number?: string
      ordered_at?: string | Date
      person: PeopleBasic
      purchases: PurchasesBasic[]
      returned_at?: string | Date
      returned_reason?: string
      shipping_cost: Money
      submitted_at?: string | Date
      tax_cost: Money
      updated_at: string | Date
      user_id: number
      vendor: VendorsOptions
      vendor_id: number
    }
  }
}
