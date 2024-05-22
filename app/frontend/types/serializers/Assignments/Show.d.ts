// TypesFromSerializers CacheKey 0e5f4c5502b28ecac4b34b242b5dacce
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type AssignToable from '../AssignToable'
import type Assignable from '../Assignable'
import type PeopleShow from '../People/Show'

declare global {
  namespace Schema {
    interface AssignmentsShow {
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
      created_by: PeopleShow
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
