// TypesFromSerializers CacheKey 4bdbe51e9a40139ac2be8694c7199fc6
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Money from '../../Money'
import type LocationsOptions from '../Locations/Options'
import type DepartmentsOptions from '../Departments/Options'
import type ModelsOptions from '../Models/Options'
import type StatusLabelsOptions from '../StatusLabels/Options'
import type VendorsOptions from '../Vendors/Options'

declare global {
  namespace Schema {
    interface ItemsFormData {
      id: number
      asset_tag?: string
      assigned: boolean
      cost: Money
      cost_currency: string
      default_location?: LocationsOptions
      default_location_id?: number
      department?: DepartmentsOptions
      department_id: number
      model?: ModelsOptions
      model_id: number
      name: string
      notes?: string
      purchased_at?: string | Date
      requestable: boolean
      serial?: string
      status_label?: StatusLabelsOptions
      status_label_id?: number
      vendor?: VendorsOptions
      vendor_id?: number
    }
  }
}
