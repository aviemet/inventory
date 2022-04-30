import { type InertiaFormProps as DefaultInertiaFormProps } from '@inertiajs/inertia-react';


declare global {
	interface InertiaFormProps extends DefaultInertiaFormProps {
		errors: Record<keyof TForm, string|string[]>
	}

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
	}

	type HTTPVerb = 'POST'|'PUT'|'GET'|'PATCH'|'DESTROY'
}
