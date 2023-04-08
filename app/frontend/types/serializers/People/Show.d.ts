// TypesFromSerializers CacheKey cd31e04038d98cf67fc64b62f77b41c1
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type { Accessory } from '../Accessory'
import type { Activity } from '../Activity'
import type { Contact } from '../Contact'
import type { Department } from '../Department'
import type { Item } from '../Item'
import type { License } from '../License'
import type { Person } from '../Person'
import type { Assignment } from '../Assignment'
import type { User } from '../User'

declare export global {
	declare namespace Schema {
		export interface PeopleShow {
			id?: number
			accessories: Accessory[]
			active: boolean
			activities: Activity[]
			contact: Contact
			created_at: string | Date
			department: Department
			employee_number?: string
			first_name?: string
			items: Item[]
			job_title?: string
			last_name?: string
			licenses: License[]
			manager: Person
			manager_id?: number
			middle_name?: string
			name: unknown
			possessions: Assignment[]
			updated_at: string | Date
			user: User
			user_id?: number
		}

	}
}
