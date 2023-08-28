import { type InertiaFormProps as DefaultInertiaFormProps, InertiaHeadProps } from '@inertiajs/core-react'
import { Page, PageProps, Errors, ErrorBag } from '@inertiajs/core'

declare global {

	// interface IndexedInertiaFormProps extends DefaultInertiaFormProps{
	// 	[key: string]: any
	// }

	// interface InertiaFormProps<TForm = Record<string, any>> extends Omit<DefaultInertiaFormProps, 'errors'> {
	// 	errors: Record<keyof TForm, string|string[]>
	// 	getData: (key: string) => any
	// 	unsetData: (key: string) => void
	// 	getError: (data: string) => string
	// }

	// declare namespace Inertia {
	// 	type Errors = Record<string|number, string|string[]>

	// 	interface FormProps<TForm = Record<string, any>> extends InertiaFormProps {
	// 		model?: string
	// 		method: HTTPVerb
	// 		to?: string
	// 		getData: (key: string) => any
	// 		getError: (data: string) => string
	// 		unsetData: (key: string) => void
	// 		submit: () => Promise
	// 	}
	// }
}
