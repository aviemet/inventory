// TypesFromSerializers CacheKey a186f6fa54352812ce5ef343c2d9f22b
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type { AddressesFormData } from '../Addresses/FormData'
import type { EmailsFormData } from '../Emails/FormData'
import type { PhonesFormData } from '../Phones/FormData'
import type { WebsitesFormData } from '../Websites/FormData'

declare global {
  namespace Schema {
    interface ContactsFormData {
      id?: number
      addresses: AddressesFormData[]
      contactable_id?: number
      contactable_type?: string
      created_at: string | Date
      emails: EmailsFormData[]
      notes?: string
      phones: PhonesFormData[]
      primary_address_id?: number
      primary_email_id?: number
      primary_phone_id?: number
      updated_at: string | Date
      websites: WebsitesFormData[]
    }
  }
}
