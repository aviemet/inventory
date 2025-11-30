import { PageProps, Errors, ErrorBag } from "@inertiajs/core"
import { usePage } from "@inertiajs/react"

import { type FlashMessage } from "@/types/FlashMessage"

export interface SharedInertiaProps extends PageProps {
	auth: {
		form_authenticity_token: string
		user: Schema.UsersFlash
	}
	flash: FlashMessage
	errors: Errors & ErrorBag
}

const usePageProps = () => {
	return usePage<SharedInertiaProps>().props
}

export default usePageProps
