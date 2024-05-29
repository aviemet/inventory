// TypesFromSerializers CacheKey 04eab7349ffab0731ec05dabc4df1552
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type AssignToable from '../AssignToable'
import type Assignable from '../Assignable'

declare global {
  namespace Schema {
    interface AssignmentsBasic {
      id: number
      active: boolean
      assign_toable: AssignToable
      assign_toable_id: number
      assign_toable_type: AssignToableTypes
      assignable: Assignable
      assignable_id: number
      assignable_type: AssignableTypes
      assigned_at?: string | Date
      created_at: string | Date
      created_by_id?: number
      expected_at?: string | Date
      location_id: number
      notes?: string
      qty: number
      returned_at?: string | Date
      status?: number
      updated_at: string | Date
    }
  }
}