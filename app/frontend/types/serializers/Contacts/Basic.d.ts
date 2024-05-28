// TypesFromSerializers CacheKey 864e5146d2fd017f5625711829b5a39f
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Address from '../Address'
import type Email from '../Email'
import type Phone from '../Phone'
import type Website from '../Website'

declare global {
  namespace Schema {
    interface ContactsBasic {
      id: number
      addresses: Address[]
      contactable_id?: number
      contactable_type?: string
      emails: Email[]
      notes?: string
      phones: Phone[]
      primary_address_id?: number
      primary_email_id?: number
      primary_phone_id?: number
      websites: Website[]
    }
  }
}
