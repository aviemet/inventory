// TypesFromSerializers CacheKey 4ed346240c24e904e37ec047650c9dbf
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type IUserTablePreferences from '../../IUserTablePreferences'
import type IUserPreferences from '../../IUserPreferences'
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
      confirmation_sent_at?: string | Date
      confirmed_at?: string | Date
      created_at: string | Date
      current_sign_in_at?: string | Date
      current_sign_in_ip?: string
      email: string
      failed_attempts: number
      last_sign_in_at?: string | Date
      last_sign_in_ip?: string
      locked_at?: string | Date
      people: UsersShowSerializerShowUserPerson[]
      person: UsersShowSerializerShowUserPerson
      remember_created_at?: string | Date
      reset_password_sent_at?: string | Date
      roles: Role[]
      sign_in_count: number
      table_preferences: IUserTablePreferences
      unconfirmed_email?: string
      updated_at: string | Date
      user_preferences: IUserPreferences
    }
  }
}
