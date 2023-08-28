// TypesFromSerializers CacheKey 49334854574f526e5efb4793a2766058
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Accessory from '../Accessory'
import type Activity from '../Activity'
import type Contact from '../Contact'
import type Department from '../Department'
import type PersonGroup from '../PersonGroup'
import type Item from '../Item'
import type License from '../License'
import type Person from '../Person'
import type Assignment from '../Assignment'
import type User from '../User'

declare global {
  namespace Schema {
    interface PeopleIndex {
      id: number
      accessories: Accessory[]
      active: boolean
      activities: Activity[]
      contact: Contact
      created_at: string | Date
      department: Department
      employee_number?: string
      first_name?: string
      groups: PersonGroup[]
      items: Item[]
      job_title?: string
      last_name?: string
      licenses: License[]
      manager: Person
      manager_id?: number
      middle_name?: string
      name: string
      possessions: Assignment[]
      updated_at: string | Date
      user: User
      user_id?: number
    }
  }
}
