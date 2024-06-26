// TypesFromSerializers CacheKey dc63128138d0e4c9076d4ee92f0cebc9
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type UserTablePreferences from '../../UserTablePreferences'
import type UserPreferences from '../../UserPreferences'
import type CompaniesOptions from '../Companies/Options'
import type Activity from '../Activity'
import type UsersShowSerializerShowUserPerson from './ShowSerializer/ShowUserPerson'
import type Role from '../Role'

declare global {
  namespace Schema {
    interface UsersShow {
      id: number
      active: boolean
      active_company: CompaniesOptions
      active_company_id?: number
      activities: Activity[]
      companies: CompaniesOptions[]
      created_at: string | Date
      email: string
      people: UsersShowSerializerShowUserPerson[]
      person: UsersShowSerializerShowUserPerson
      roles: Role[]
      table_preferences: UserTablePreferences
      updated_at: string | Date
      user_preferences: UserPreferences
    }
  }
}
