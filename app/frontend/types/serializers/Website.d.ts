// TypesFromSerializers CacheKey 16370b205635f62a220e38dcb6fd10c6
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type CategoriesOptions from './Categories/Options'

declare global {
  namespace Schema {
    interface Website {
      id?: number
      category: CategoriesOptions
      contact_id: number
      name?: string
      notes?: string
      url: string
    }
  }
}
