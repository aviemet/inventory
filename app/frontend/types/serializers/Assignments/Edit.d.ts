// TypesFromSerializers CacheKey ac51a647df0d99adf6370dacbbe16aad
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
export {}

declare global {
  namespace Schema {
    interface AssignmentsEdit {
      id: number
      active: boolean
      assign_toable_id: number
      assign_toable_type: AssignToable
      assignable_id: number
      assignable_type: Assignable
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
