// TypesFromSerializers CacheKey 60c489b2b09907accc8eb4c3240b5212
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type CategoriesOptions from './Categories/Options'

declare global {
  namespace Schema {
    interface Email {
      id?: number
      category: CategoriesOptions
      category_id?: number
      contact_id: number
      email: string
      notes?: string
    }
  }
}
