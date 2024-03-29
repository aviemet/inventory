// TypesFromSerializers CacheKey 7c71e024b755c61ef80ee66d3a47ddeb
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type CategoriesOptions from '../Categories/Options'
import type ManufacturersOptions from '../Manufacturers/Options'

declare global {
  namespace Schema {
    interface ModelsEdit {
      id: number
      category: CategoriesOptions
      category_id: number
      manufacturer: ManufacturersOptions
      manufacturer_id: number
      model_number?: string
      name?: string
      notes?: string
      slug: string
    }
  }
}
