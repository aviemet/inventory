import { 
	type InertiaFormProps as DefaultInertiaFormProps
} from '@inertiajs/inertia-react'
import {
	Page, 
	PageProps,
	Errors,
	ErrorBag,
} from '@inertiajs/inertia'

declare global {
	type HTTPVerb = 'post'|'put'|'get'|'patch'|'destroy'

	interface IndexedInertiaFormProps extends DefaultInertiaFormProps{
		[key: string]: any
	}

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

	interface SharedInertiaProps extends PageProps {
		auth: {
			form_authenticty_token: string
			user: Schema.User
		}
		flash: Record<'success'|'alert'|'info'|'warning',string>,
		errors: Errors & ErrorBag
	}

	interface InertiaPage extends Page<PageProps> {
		props: SharedInertiaProps
	}

	declare namespace Inertia {
		type Errors = Record<string|number|symbol, string|string[]>
		
		interface FormProps extends InertiaFormProps {
			model?: string
			getData: (key: string) => any
			getErrors: (data: string) => string
			separator: string
		}
	}
}
