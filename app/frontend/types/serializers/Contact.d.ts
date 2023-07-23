// TypesFromSerializers CacheKey 831ea47fbf86a488ade978b9a88528c2
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Address from './Address'
import type Email from './Email'
import type Phone from './Phone'
import type Website from './Website'

declare global {
  namespace Schema {
    interface Contact {
      id: number
      addresses: Address[]
      contactable_id?: number
      contactable_type?: string
      created_at: string | Date
      emails: Email[]
      notes?: string
      phones: Phone[]
      primary_address_id?: number
      primary_email_id?: number
      primary_phone_id?: number
      updated_at: string | Date
      websites: Website[]
    }
  }
}
