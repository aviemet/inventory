// TypesFromSerializers CacheKey 9a6c6bd52c9711cff7b942f31e0a569f
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
export {}

declare global {
  namespace Schema {
    interface AssignmentsFormData {
      id?: number
      active: boolean
      assign_toable_id: number
      assign_toable_type: TAssignToable
      assignable_id: number
      assignable_type: TAssignable
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
