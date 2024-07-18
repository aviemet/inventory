import React from 'react'
import { Link, Tooltip } from '@/Components'
import { type LinkProps } from '../Link'
import { TrashIcon } from '@/Components/Icons'
import { useMantineTheme } from '@mantine/core'
import { useContrastingTextColor } from '@/lib/hooks'

interface DeleteButtonProps extends Omit<LinkProps, 'children'> {
	label?: string
	tooltipMessage?: string | false | null
}

const DeleteButton = ({ href, label, tooltipMessage }: DeleteButtonProps) => {
	const { other: { colors: { deleteButtonColor } } } = useMantineTheme()

	const usedLabel = tooltipMessage || `Check In${label ? ` ${label}` : ''}`

	return (
		<Tooltip
			withArrow
			label={ usedLabel }
			position="left"
			transitionProps={ { transition: 'fade' } }
			color={ deleteButtonColor }
		>
			<Link as="button" href={ href } aria-label={ `Delete ${label}` }>
				<TrashIcon color={ useContrastingTextColor(deleteButtonColor) } />
			</Link>
		</Tooltip>
	)
}

export default DeleteButton
