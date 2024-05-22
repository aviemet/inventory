// TypesFromSerializers CacheKey 0d5103876aaca61fc1a8ae59ee18e8c4
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Person from '../Person'

declare global {
  namespace Schema {
    interface PersonGroupsIndex {
      id: number
      created_at: string | Date
      description?: string
      name: string
      people: Person[]
      permissions: {
    [key: string]: Record<string, boolean>
  }
      slug: string
      updated_at: string | Date
    }
  }
}
