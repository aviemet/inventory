// TypesFromSerializers CacheKey b4c0aa862341bb947c61be4d098e50c8
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type ActivitySerializerUserActivity from '../ActivitySerializer/UserActivity'
import type ActivitySerializerPersonActivity from '../ActivitySerializer/PersonActivity'

declare global {
  namespace Schema {
    interface ActivitiesBasic {
      id: number
      created_at: string | Date
      key?: string
      owner: ActivitySerializerUserActivity
      owner_id?: number
      owner_type?: string
      parameters: Record<string, string>
      person: ActivitySerializerPersonActivity
      recipient_id?: number
      recipient_type?: string
      route: string
      trackable_id?: number
      trackable_type?: string
      updated_at: string | Date
    }
  }
}