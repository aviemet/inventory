import { Instance } from 'flatpickr/dist/types'

declare global {
	type HTTPVerb = 'post'|'put'|'get'|'patch'|'destroy'

	declare namespace Schema {
		type Pagination = {
			count: number
			pages: number
			limit: number
			current_page: number
			next_page: number
			prev_page: number
			is_first_page: boolean
			is_last_page: boolean
		}

		interface Item {
			assigned: boolean
		}
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
