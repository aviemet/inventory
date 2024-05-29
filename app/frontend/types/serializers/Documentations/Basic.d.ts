// TypesFromSerializers CacheKey 81135e2edd1931c6a6f62b1f1f7ed948
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type CategoriesOptions from '../Categories/Options'

declare global {
  namespace Schema {
    interface DocumentationsBasic {
      id: number
      body?: string
      category: CategoriesOptions
      category_id: number
      created_at: string | Date
      created_by_id?: number
      documentable_id: number
      documentable_name: string
      documentable_type: string
      slug: string
      title: string
      updated_at: string | Date
    }
  }
}