// TypesFromSerializers CacheKey 0083a3fc44bf9c448aeba57b17a11ebf
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Category from '../Category'
import type Manufacturer from '../Manufacturer'

export default interface ModelsIndex {
  id?: number
  category: Category
  categoryId: number
  count: unknown
  createdAt: string | Date
  manufacturer: Manufacturer
  manufacturerId: number
  modelNumber?: string
  name?: string
  notes?: string
  slug: string
  updatedAt: string | Date
}

