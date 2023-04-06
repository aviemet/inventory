// TypesFromSerializers CacheKey 40fc00afb1944d2c5d76eaf2d5ee74d0
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Company from '../Company'
import type Activity from '../Activity'
import type Person from '../Person'
import type Role from '../Role'

export default interface UsersShow {
  id?: number
  active: boolean
  activeCompany: Company
  activeCompanyId?: number
  activities: Activity[]
  companies: Company[]
  confirmationSentAt?: string | Date
  confirmedAt?: string | Date
  createdAt: string | Date
  currentSignInAt?: string | Date
  currentSignInIp?: unknown
  email: string
  failedAttempts: number
  lastSignInAt?: string | Date
  lastSignInIp?: unknown
  lockedAt?: string | Date
  people: Person[]
  rememberCreatedAt?: string | Date
  resetPasswordSentAt?: string | Date
  roles: Role[]
  signInCount: number
  tablePreferences: unknown
  unconfirmedEmail?: string
  updatedAt: string | Date
  userPreferences: unknown
}

