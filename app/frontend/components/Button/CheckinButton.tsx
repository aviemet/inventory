import { Tooltip, useMantineTheme } from "@mantine/core"

import { Link } from "@/components"
import { CheckinIcon } from "@/components/Icons"
import { useContrastingTextColor } from "@/lib/hooks"

import { type LinkProps } from "../Link"

interface CheckinButtonProps extends Omit<LinkProps, "children"> {
	href: string
	label?: string
	disabled?: boolean
	tooltipMessage?: string | false | null
}

export function CheckinButton({ href, label, disabled, tooltipMessage, buttonProps, ...props }: CheckinButtonProps) {
	const { other: { colors: { checkinButtonColor } } } = useMantineTheme()

	const mergedButtonProps = {
		color: checkinButtonColor,
		...(disabled && { disabled: true }),
		...buttonProps,
	}

	const usedLabel = tooltipMessage || `Check In${label ? ` ${label}` : ""}`

	return (
		<Tooltip
			withArrow
			label={ usedLabel }
			position="left"
			transitionProps={ { transition: "fade" } }
			color={ checkinButtonColor }
		>
			<Link
				as="button"
				href={ href }
				buttonProps={ mergedButtonProps }
				aria-label={ usedLabel }
				{ ...props }
			>
				<CheckinIcon color={ useContrastingTextColor(checkinButtonColor) } />
			</Link>
		</Tooltip>
	)
}

