// TypesFromSerializers CacheKey d5c3460762aa7df23fa0f5c81873b1e2
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Activity from './Activity'
import type Category from './Category'
import type Contact from './Contact'

declare global {
  namespace Schema {
    interface Address {
      id?: number
      activities: Activity[]
      address: string
      address_2?: string
      category: Category
      category_id: number
      city?: string
      contact: Contact
      contact_id: number
      country?: string
      created_at: string | Date
      notes?: string
      postal?: string
      region?: string
      updated_at: string | Date
    }
  }
}
