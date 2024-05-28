// TypesFromSerializers CacheKey 2fb71e0769da322a11437e37ee3d8d9f
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Money from '../../Money'
import type AccessoriesBasic from '../Accessories/Basic'
import type ActivitiesBasic from '../Activities/Basic'
import type AssignmentsShow from '../Assignments/Show'
import type CategoriesBasic from '../Categories/Basic'
import type ComponentsBasic from '../Components/Basic'
import type ConsumablesBasic from '../Consumables/Basic'
import type LocationsBasic from '../Locations/Basic'
import type DepartmentsBasic from '../Departments/Basic'
import type DocumentationsIndex from '../Documentations/Index'
import type IpLeasesOptions from '../IpLeases/Options'
import type ItemsBasic from './Basic'
import type LicensesBasic from '../Licenses/Basic'
import type ManufacturersBasic from '../Manufacturers/Basic'
import type ModelsBasic from '../Models/Basic'
import type NicsBasic from '../Nics/Basic'
import type StatusLabelsBasic from '../StatusLabels/Basic'
import type VendorsBasic from '../Vendors/Basic'

declare global {
  namespace Schema {
    interface ItemsShow {
      id: number
      accessories: AccessoriesBasic[]
      activities: ActivitiesBasic[]
      asset_tag?: string
      assigned: boolean
      assignments: AssignmentsShow[]
      category: CategoriesBasic
      components: ComponentsBasic[]
      consumables: ConsumablesBasic[]
      cost: Money
      cost_currency: string
      created_at: string | Date
      default_location: LocationsBasic
      default_location_id?: number
      department: DepartmentsBasic
      documentations: DocumentationsIndex[]
      ips?: IpLeasesOptions[]
      items: ItemsBasic[]
      licenses: LicensesBasic[]
      location: LocationsBasic
      manufacturer: ManufacturersBasic
      model: ModelsBasic
      model_id: number
      name: string
      nics: NicsBasic[]
      notes?: string
      purchased_at?: string | Date
      requestable: boolean
      serial?: string
      status_label: StatusLabelsBasic
      status_label_id?: number
      updated_at: string | Date
      vendor: VendorsBasic
      vendor_id?: number
    }
  }
}
