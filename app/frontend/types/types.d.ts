import { Instance } from 'flatpickr/dist/types'

declare global {
	type HTTPVerb = 'post'|'put'|'get'|'patch'|'destroy'

	type TAssignToable = 'Person'|'Item'|'Location'
	type TAssignable = 'Item'|'Accessory'|'Component'|'Consumable'|'License'

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
		}

		interface AssignToable {
			location?: Schema.Location
		}

		interface UID {
			uid: string
		}

		interface Item extends Assignable, AssignToable, UID {}
		interface Accessory extends Assignable, UID {}
		interface Component extends Assignable, UID {}
		interface Consumable extends Assignable, UID {}
		interface License extends Assignable, UID {}

		interface Location extends AssignToable, UID {}
		interface Person extends AssignToable, UID {}

		interface User extends UID {}
		interface Department extends UID {}
		interface Category extends UID {}
		interface Contact extends UID {}
		interface Website extends UID {}
		interface Manufacturer extends UID {}
		interface Fieldset extends UID {}
		interface Nic extends UID {}
		interface IpLease extends UID {}
		interface Contract extends UID {}
		interface Email extends UID {}
		interface Network extends UID {}
		interface Assignment extends UID {}
		interface Warranty extends UID {}
		interface Model extends UID {}
		interface StatusType extends UID {}
		interface Purchase extends UID {}
		interface Role extends UID {}
		interface FieldsetAssociation extends UID {}
		interface Order extends UID {}
		interface Company extends UID {}
		interface Vendor extends UID {}
		interface Field extends UID {}
		interface Ownership extends UID {}
		interface Address extends UID {}
		interface Phone extends UID {}
		interface AuditedAudited extends UID {}
	}

	type FlashMessage = Record<'success'|'alert'|'info'|'warning',string>

	declare namespace Flatpicker {
		export interface Instance extends Instance {}
		export interface ChangeProps {
			dates: Date[]
			dateStr: string
			instance: Instance
		}
	}
}
