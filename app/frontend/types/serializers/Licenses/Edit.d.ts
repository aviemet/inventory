// TypesFromSerializers CacheKey f0dda595a56692947eff18bd605d0e9b
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type CategoriesOptions from '../Categories/Options'
import type ManufacturersOptions from '../Manufacturers/Options'
import type VendorsOptions from '../Vendors/Options'

declare global {
  namespace Schema {
    interface LicensesEdit {
      id: number
      category: CategoriesOptions
      category_id: number
      cost: number
      cost_currency: string
      expires_at?: string | Date
      key?: string
      licenser_email?: string
      licenser_name?: string
      maintained: boolean
      manufacturer: ManufacturersOptions
      manufacturer_id: number
      name: string
      notes?: string
      purchased_at?: string | Date
      qty?: number
      qty_available: number
      reassignable: boolean
      terminates_at?: string | Date
      vendor: VendorsOptions
      vendor_id?: number
    }
  }
}
