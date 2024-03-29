// TypesFromSerializers CacheKey e0ba2146040774f00eda16a15ff580c1
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
      people: Person[]
      person: Person
    }
  }
}
