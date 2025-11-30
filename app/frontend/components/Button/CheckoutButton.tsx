import { Tooltip, useMantineTheme } from "@mantine/core"

import { Link } from "@/components"
import { CheckoutIcon } from "@/components/Icons"
import { useContrastingTextColor } from "@/lib/hooks"

import { type LinkProps } from "../Link"

interface CheckoutButtonProps extends Omit<LinkProps, "children"> {
	href: string
	label?: string
	disabled?: boolean
	tooltipMessage?: string | false | null
}

export function CheckoutButton({ href, label, disabled, tooltipMessage, ...props }: CheckoutButtonProps) {
	const { other: { colors: { checkoutButtonColor } } } = useMantineTheme()

	const usedLabel = tooltipMessage || `Checkout${label ? ` ${label}` : ""}`

	return (
		<Tooltip
			withArrow
			label={ usedLabel }
			position="left"
			transitionProps={ { transition: "fade" } }
			color={ checkoutButtonColor }
		>
			<Link
				as="button"
				href={ href }
				buttonProps={ { disabled, color: checkoutButtonColor } }
				aria-label={ usedLabel }
				{ ...props }
			>
				<CheckoutIcon color={ useContrastingTextColor(checkoutButtonColor) } />
			</Link>
		</Tooltip>
	)
}

