// TypesFromSerializers CacheKey 8bf6db5a546dcdd6e129c9d60e2228fb
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type CategoriesOptions from '../Categories/Options'

declare global {
  namespace Schema {
    interface DocumentationsFormData {
      id?: number
      slug?: string
      body?: string
      category: CategoriesOptions
      category_id: number
      created_by_id?: number
      documentable_id: number
      documentable_name: string
      documentable_route: string
      documentable_type: string
      title: string
    }
  }
}
