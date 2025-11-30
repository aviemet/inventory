import { useMantineTheme } from "@mantine/core"

import { Link, Tooltip } from "@/components"
import { TrashIcon } from "@/components/Icons"
import { useContrastingTextColor } from "@/lib/hooks"

import { type LinkProps } from "../Link"

interface DeleteButtonProps extends Omit<LinkProps, "children"> {
	label?: string
	tooltipMessage?: string | false | null
}

export function DeleteButton({ href, label, tooltipMessage }: DeleteButtonProps) {
	const { other: { colors: { deleteButtonColor } } } = useMantineTheme()

	const usedLabel = tooltipMessage || `Check In${label ? ` ${label}` : ""}`

	return (
		<Tooltip
			withArrow
			label={ usedLabel }
			position="left"
			transitionProps={ { transition: "fade" } }
			color={ deleteButtonColor }
		>
			<Link as="button" href={ href } aria-label={ `Delete ${label}` }>
				<TrashIcon color={ useContrastingTextColor(deleteButtonColor) } />
			</Link>
		</Tooltip>
	)
}

