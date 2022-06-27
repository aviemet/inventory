import { Instance } from 'flatpickr/dist/types'

declare global {
	type HTTPVerb = 'post'|'put'|'get'|'patch'|'destroy'

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

		interface Item extends Assignable {}
		interface Accessory extends Assignable {}
		interface Component extends Assignable {}
		interface Consumable extends Assignable {}
		interface License extends Assignable {}
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
