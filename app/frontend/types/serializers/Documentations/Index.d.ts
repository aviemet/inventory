// TypesFromSerializers CacheKey 0dae0f8a9ba763828d4d49ae71095eb5
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type { Person } from '../Person'

declare global {
  namespace Schema {
    interface DocumentationsIndex {
      id: number
      body?: string
      created_at: string | Date
      created_by: Person
      slug?: string
      title?: string
      updated_at: string | Date
    }
  }
}
