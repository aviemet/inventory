// TypesFromSerializers CacheKey 92650b98d5190cfb53874f809e700b27
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type CategoriesOptions from '../Categories/Options'

declare global {
  namespace Schema {
    interface DocumentationsEdit {
      id: number
      body?: string
      category: CategoriesOptions
      category_id: number
      created_by_id?: number
      documentable_id: number
      documentable_name: string
      documentable_route: string
      documentable_type: string
      slug: string
      title: string
    }
  }
}
