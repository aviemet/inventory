import { useMantineTheme } from "@mantine/core"

import { Link, Tooltip } from "@/components"
import { EditIcon } from "@/components/Icons"
import { useContrastingTextColor } from "@/lib/hooks"

import { LinkProps } from "../Link"

interface EditButtonProps extends Omit<LinkProps, "children"> {
	label?: string
}

export function EditButton({ href, label }: EditButtonProps) {
	const { primaryColor } = useMantineTheme()

	const usedLabel = `Edit${label ? ` ${label}` : ""}`

	return (
		<Tooltip
			withArrow
			label={ usedLabel }
			position="left"
			transitionProps={ { transition: "fade" } }
			aria-label={ usedLabel }
			color={ primaryColor }
		>
			<Link as="button" href={ href } aria-label={ `Edit ${label}` }>
				<EditIcon color={ useContrastingTextColor(primaryColor) } />
			</Link>
		</Tooltip>
	)
}
