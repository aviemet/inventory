// TypesFromSerializers CacheKey 53578845470570a7e97b144cd7e6f5a4
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Company from '../Company'
import type Person from '../Person'

declare global {
  namespace Schema {
    interface UsersEdit {
      id: number
      active: boolean
      active_company_id?: number
      companies: Company[]
      email: string
      password: unknown
      password_confirmation: unknown
      people: Person[]
      person: Person
    }
  }
}
