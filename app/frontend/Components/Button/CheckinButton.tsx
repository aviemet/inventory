import React from 'react'
import { Link } from '@/Components'
import { type LinkProps } from '../Link'
import { CheckinIcon } from '@/Components/Icons'
import { Tooltip, useMantineTheme } from '@mantine/core'

interface CheckinButtonProps extends Omit<LinkProps, 'children'> {
	href: string
	label?: string
	disabled?: boolean
	tooltipMessage?: string | false | null
}

const CheckinButton = ({ href, label, disabled, tooltipMessage, ...props }: CheckinButtonProps) => {
	const { other: { colors: { checkinButtonColor } } } = useMantineTheme()

	const finalProps = props
	if(disabled) {
		finalProps.buttonProps = {
			disabled: true,
		}
	}

	const usedLabel = tooltipMessage || `Check In${label ? ` ${label}` : ''}`

	return (
		<Tooltip
			withArrow
			label={ usedLabel }
			position="left"
			transitionProps={ { transition: 'fade' } }
			color={ checkinButtonColor }
		>
			<Link
				as="button"
				href={ href }
				buttonProps={ { color: checkinButtonColor } }
				aria-label={ usedLabel }
				{ ...finalProps }
			>
				<CheckinIcon />
			</Link>
		</Tooltip>
	)
}

export default CheckinButton
