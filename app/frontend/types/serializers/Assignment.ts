// TypesFromSerializers CacheKey ca4828a78dae6b01e988d6ff3c2be24d
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type AssignToable from './AssignToable'
import type Assignable from './Assignable'

export default interface Assignment {
  id?: number
  active: boolean
  assignToable: AssignToable
  assignToableId: number
  assignToableType: string
  assignable: Assignable
  assignableId: number
  assignableType: string
  assignedAt?: string | Date
  createdAt: string | Date
  createdById?: number
  expectedAt?: string | Date
  locationId: number
  notes?: string
  qty: number
  returnedAt?: string | Date
  status?: number
  updatedAt: string | Date
}

