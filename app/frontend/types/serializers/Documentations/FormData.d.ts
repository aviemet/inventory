// TypesFromSerializers CacheKey 722931d49571fc3f2ede936ef367968f
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type { Person } from '../Person'

declare global {
  namespace Schema {
    interface DocumentationsFormData {
      id?: number
      body?: string
      created_by: Person
      slug: string
      title?: string
    }
  }
}
