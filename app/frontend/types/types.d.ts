import { Instance } from 'flatpickr/dist/types'
import { type ISearchableDropdownProps } from '@/Components/Inputs/SearchableDropdown'
import { type SelectProps } from '@mantine/core'

declare global {
	type HTTPVerb = 'post' | 'put' | 'get' | 'patch' | 'delete'

	type TInputType = 'button'|'checkbox'|'color'|'currency'|'date'|'datetime-local'|'email'|'file'|'hidden'|'image'|'month'|'number'|'password'|'radio'|'range'|'reset'|'search'|'select'|'submit'|'tel'|'text'|'textarea'|'time'|'url'

	type TAssignToable = 'Person' | 'Item' | 'Location'
	type TAssignable = 'Item' | 'Accessory' | 'Component' | 'Consumable' | 'License'

	declare namespace Schema {
		interface Pagination {
			count: number
			pages: number
			limit: number
			current_page: number
			next_page: number
			prev_page: number
			is_first_page: boolean
			is_last_page: boolean
		}

		interface Assignable {
			assigned: boolean
			available_to_checkout: boolean
		}

		interface AssignToable {
			location?: Schema.Location
		}

		interface UID {
			uid?: string
		}

		interface Accessory extends Assignable, UID {
			active_assignments_count?: number
		}
		interface Address extends UID { }
		interface Assignment extends UID {
			assign_toable: Schema.Person | Schema.Item | Schema.Location
		}
		interface PublicActivityActivity {
			user?: Schema.User
			person?: Schema.Person
			route?: string
			created_at: string
		}
		interface Asset extends Assignable, UID { }
		interface Category extends UID { }
		interface Company extends UID { }
		interface Component extends Assignable, UID { }
		interface Consumable extends Assignable, UID { }
		interface Contact extends UID { }
		interface Contract extends UID { }
		interface Department extends UID { }
		interface Email extends UID { }
		interface Field extends UID { }
		interface Fieldset extends UID { }
		interface FieldsetAssociation extends UID { }
		interface IpLease extends UID { }
		interface Item extends Assignable, AssignToable, UID { }
		interface License extends Assignable, UID { }
		interface Location extends AssignToable, UID { }
		interface Manufacturer extends UID { }
		interface Model extends UID { }
		interface Network extends UID { }
		interface Nic extends UID { }
		interface Order extends UID { }
		interface Ownership extends UID { }
		interface Person extends AssignToable, UID {
			name?: string
		}
		interface Phone extends UID { }
		interface Purchase extends UID { }
		interface Role extends UID { }
		interface StatusType extends UID { }
		interface User extends UID { }
		interface Vendor extends UID { }
		interface Warranty extends UID { }
		interface Website extends UID { }

		type CompanyCounts = {
			locations: number
			items: number
			accessories: number
			consumables: number
			components: number
			departments: number
			licenses: number
			contracts: number
			people: number
			vendors: number
			manufacturers: number
		}

		interface CompanyWithCounts extends Schema.Company {
			counts: CompanyCounts
		}

		type DepartmentCounts = {
			items: number
			accessories: number
			consumables: number
			components: number
			licenses: number
			contracts: number
			people: number
		}

		interface DepartmentWithCounts extends Schema.Department {
			counts: DepartmentCounts
		}

		type ManufacturerCounts = {
			models: number
			items: number
			accessories: number
			consumables: number
			components: number
		}

		interface ManufacturerWithCounts extends Schema.Manufacturer {
			counts: ManufacturerCounts
		}

		interface ModelWithCount extends Schema.Model {
			count: number
		}

		interface CategoryWithQty extends Schema.Category {
			qty: number
		}
	}

	type FlashMessage = Record<'success' | 'alert' | 'info' | 'warning', string>

	declare namespace Flatpicker {
		export interface Instance extends Instance { }
		export interface ChangeProps {
			dates: Date[]
			dateStr: string
			instance: Instance
		}
	}

	interface IDropdownWithModalButton {
		name?: string
		model?: string
		label?: string
		fetchOnOpen?: string
		required?: boolean
	}
}

declare module '@mantine/core' {
	export interface MantineThemeOther {
		colorSchemeOption: (light: any, dark: any) => any
		header: {
			height: number,
		}
		navbar: {
			width: {
				closed: number,
				open: number,
			}
		}
		footer: {
			height: number,
		}
		form: {
			label: {
				width: number | string
			}
		}
		table: {
			sortButtonHeight: number | string,
			sortButtonWidth: number | string,
		}
	}

}