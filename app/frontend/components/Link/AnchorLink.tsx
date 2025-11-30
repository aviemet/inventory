import { Link, type InertiaLinkProps } from "@inertiajs/react"
import { Anchor, type AnchorProps } from "@mantine/core"
import { forwardRef } from "react"

export interface AnchorLinkProps
	extends Omit<InertiaLinkProps, "color" | "size" | "span" | "style">,
	Omit<AnchorProps, "href"> {

}

export const AnchorLink = forwardRef<HTMLAnchorElement, AnchorLinkProps>((
	{ preserveScroll, ...props },
	ref,
) => {
	return (
		<Anchor
			ref={ ref }
			component={ Link }
			preserveScroll={ preserveScroll }
			{ ...props }
		/>
	)
})
