// TypesFromSerializers CacheKey 626a75c279e390660db5453ae3d4de61
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type ModelsOptions from '../Models/Options'
import type StatusLabelsBasic from '../StatusLabels/Basic'

declare global {
  namespace Schema {
    interface ComponentsSpotlight {
      id: string
      asset_tag?: string
      default_location_id?: number
      model: ModelsOptions
      model_id: number
      name: string
      qty?: number
      status_label: StatusLabelsBasic
      status_label_id?: number
      type: string
      vendor_id?: number
    }
  }
}