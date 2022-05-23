import { type InertiaFormProps as DefaultInertiaFormProps } from '@inertiajs/inertia-react'
import {
	Page, 
	PageProps,
	Errors,
	ErrorBag,
} from '@inertiajs/inertia'

declare global {

	interface SharedInertiaProps extends PageProps {
		auth: {
			form_authenticty_token: string
			user: Schema.User
		}
		flash: FlashMessage,
		errors: Errors & ErrorBag
	}

	interface InertiaPage<T = void> extends Page<PageProps> {
		props: SharedInertiaProps & T
	}

	interface IndexedInertiaFormProps extends DefaultInertiaFormProps{
		[key: string]: any
	}

	interface InertiaFormProps extends Omit<DefaultInertiaFormProps, 'errors'> {
		errors: Record<keyof TForm, string|string[]>
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
