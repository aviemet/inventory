// TypesFromSerializers CacheKey ad8edc60f78bada7d432a5bf46db50b0
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type UserTablePreferences from '../../UserTablePreferences'
import type UserPreferences from '../../UserPreferences'
import type CompaniesOptions from '../Companies/Options'
import type UsersBasicSerializerShowUserPerson from './BasicSerializer/ShowUserPerson'
import type Role from '../Role'

declare global {
  namespace Schema {
    interface UsersBasic {
      id: number
      active: boolean
      active_company: CompaniesOptions
      active_company_id?: number
      companies: CompaniesOptions[]
      created_at: string | Date
      email: string
      person: UsersBasicSerializerShowUserPerson
      roles: Role[]
      table_preferences: UserTablePreferences
      updated_at: string | Date
      user_preferences: UserPreferences
    }
  }
}
