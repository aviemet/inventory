// TypesFromSerializers CacheKey f1830fcc23f4eadf950833a4e828be87
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Money from '../../Money'
import type ActivitiesBasic from '../Activities/Basic'
import type AssignmentsShow from '../Assignments/Show'
import type CategoriesBasic from '../Categories/Basic'
import type LocationsBasic from '../Locations/Basic'
import type DepartmentsBasic from '../Departments/Basic'
import type DocumentationsIndex from '../Documentations/Index'
import type ManufacturersBasic from '../Manufacturers/Basic'
import type ModelsBasic from '../Models/Basic'
import type Purchase from '../Purchase'
import type StatusLabelsOptions from '../StatusLabels/Options'
import type VendorsBasic from '../Vendors/Basic'

declare global {
  namespace Schema {
    interface ComponentsShow {
      id: number
      activities: ActivitiesBasic[]
      asset_tag?: string
      assignments: AssignmentsShow[]
      category: CategoriesBasic
      cost: Money
      cost_currency: string
      created_at: string | Date
      default_location: LocationsBasic
      default_location_id?: number
      department: DepartmentsBasic
      documentations: DocumentationsIndex[]
      manufacturer: ManufacturersBasic
      min_qty?: number
      model: ModelsBasic
      model_id: number
      name: string
      notes?: string
      purchase: Purchase
      purchased_at?: string | Date
      qty?: number
      qty_available: number
      requestable: boolean
      serial?: string
      status_label: StatusLabelsOptions
      status_label_id?: number
      updated_at: string | Date
      vendor: VendorsBasic
      vendor_id?: number
    }
  }
}
