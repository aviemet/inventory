// TypesFromSerializers CacheKey 8f992b874dbcc6c2964982f303133215
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type IUserTablePreferences from '../../IUserTablePreferences'
import type IUserPreferences from '../../IUserPreferences'
import type Company from '../Company'
import type Activity from '../Activity'
import type Person from '../Person'
import type Role from '../Role'

declare global {
  namespace Schema {
    interface UsersShow {
      id: number
      active: boolean
      active_company: Company
      active_company_id?: number
      activities: Activity[]
      companies: Company[]
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
      people: Person[]
      person: Person
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
