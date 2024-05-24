// TypesFromSerializers CacheKey 8861e156b83b367d76e909c87406fbf8
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
      route: string
      slug: string
      title: string
      updated_at: string | Date
    }
  }
}
