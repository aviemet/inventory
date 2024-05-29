// TypesFromSerializers CacheKey 5001383ca1dd48e12238ed79569819dc
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type ManufacturersOptions from '../Manufacturers/Options'
import type StatusLabelsBasic from '../StatusLabels/Basic'

declare global {
  namespace Schema {
    interface LicensesSpotlight {
      id: string
      category_id: number
      manufacturer: ManufacturersOptions
      manufacturer_id: number
      name: string
      status_label: StatusLabelsBasic
      status_label_id?: number
      vendor_id?: number
    }
  }
}