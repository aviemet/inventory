// TypesFromSerializers CacheKey 91cba8fbd38c4a58a45f796f452f241b
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Person from '../Person'

declare global {
  namespace Schema {
    interface UsersFormData {
      id?: number
      active: boolean
      active_company_id?: number
      email: string
      password: unknown
      password_confirmation: unknown
      people?: Person[]
      person?: Person
    }
  }
}
